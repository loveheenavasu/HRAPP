import React from 'react';
import {useCallback, useEffect, useRef, useState, FC} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../../CommonComponent/Header';
import COLOR from '../../../Util/Color';
import {verticalScale} from 'react-native-size-matters';
import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import LeaveDetailsLayout from './LeaveDetailsLayout';
import {HrMailngData} from '../../../Util/DummyData';
import LeaveBarChat from './LeaveBarChart';
import LeaveTypeLayout from './LeaveTypeLayout';
import LeaveUnitLayout from './LeaveUnitLayout';
import NotifyPersonLayout from './NotifyPersonLayout';
import {useIsFocused} from '@react-navigation/native';
import Toast from '../../../Util/Helper/ToastType';

const ApplyLeave: FC = () => {
  const [showLeaveType, setShowLeaveType] = useState<boolean>(false);
  const [showLeaveUnit, setShowLeaveUnit] = useState<boolean>(false);
  const [selectedLeaveUnit, setSelectedLeaveUnit] = useState<string>('');
  const [showLeaveCalendar, setShowLeaveCalendar] = useState<boolean>(false);
  const [leaveJson, setLeaveJson] = useState<Object>({});
  const [leaveArray, setLeaveArray] = useState<any>([]);
  const [selectedLeave, setSelectedLeave] = useState(
    Array(leaveArray?.length).fill(''),
  );
  const [notifyPersonName, setNotifyPersoneName] = useState<string>('');
  const [notifyList, setNotifyList] = useState<any>(HrMailngData);
  const [remark, setRemark] = useState<string>('');
  const [showNotifyList, setShowNotifyList] = useState<boolean>(false);
  const [selectedNotifyList, setSelectedNotifyList] = useState<any>([]);

  const scrollRef = useRef<ScrollView>(null);
  const remarkRef = useRef<TextInput>(null);
  const notifyRemark = useRef<TextInput>(null);
  const focus = useIsFocused();

  useEffect(() => {
    scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});
    setLeaveArray([]);
    setLeaveJson({});
    setSelectedLeaveUnit('');
  }, [focus]);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        if (Platform.OS === 'android') {
          remarkRef?.current?.blur();
          notifyRemark?.current?.blur();
        }
      },
    );
    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const clickUnit = useCallback(item => {
    setSelectedLeaveUnit(item?.value);
    setShowLeaveUnit(false);
  }, []);

  const showHideLeaveUnit = useCallback(() => {
    setShowLeaveUnit(!showLeaveUnit);
  }, [showLeaveUnit]);

  const showHideLeaveCalendar = useCallback(() => {
    setShowLeaveCalendar(!showLeaveCalendar);
  }, [showLeaveCalendar]);

  const clickLeaveType = useCallback((item: any) => {
    setShowLeaveType(false);
  }, []);

  const clickCalendar = useCallback(
    (item: any) => {
      let mLeaveArray = leaveArray;
      if (mLeaveArray?.includes(item?.dateString)) {
        let mNewArray = mLeaveArray.filter(function (ITEM: any) {
          return ITEM !== item?.dateString;
        });
        mLeaveArray = [...mNewArray];
      } else {
        mLeaveArray.push(item?.dateString);
      }
      setLeaveArray(mLeaveArray);
      let mark: any = {};
      for (let index = 0; index < mLeaveArray.length; index++) {
        mark[mLeaveArray[index]] = {
          color: COLOR.PRIMARY,
          textColor: COLOR.WHITE,
          selected: true,
          marked: false,
          selectedColor: COLOR.PRIMARY,
        };
      }
      setLeaveJson(mark);
      setSelectedLeave(Array(leaveArray?.length).fill(''));
    },
    [leaveArray],
  );

  const clickLeaveOption = useCallback(
    (item: any) => {
      const newSelectedLeave = [...selectedLeave];
      newSelectedLeave[item?.index] = item?.value;
      setSelectedLeave(newSelectedLeave);
    },
    [selectedLeave],
  );

  const clickDeleteLeave = useCallback(
    (index: number) => {
      const index1 = leaveArray.indexOf(index);
      let newSelectedLeave = selectedLeave.filter((INDEX, item) => {
        return item !== index1;
      });
      setSelectedLeave(newSelectedLeave);
      let newArary = leaveArray.filter(item => {
        return item !== index;
      });
      setLeaveArray(newArary);
      let mark: any = {};
      for (let index = 0; index < newArary.length; index++) {
        mark[newArary[index]] = {
          color: COLOR.PRIMARY,
          textColor: COLOR.WHITE,
          selected: true,
          marked: false,
          selectedColor: COLOR.PRIMARY,
        };
      }
      setLeaveJson(mark);
    },
    [leaveArray, selectedLeave],
  );
  const editNotifyPerson = useCallback(
    (txt: string) => {
      setNotifyPersoneName(txt);
      setShowNotifyList(true);
      if (txt) {
        let newArray = HrMailngData.filter(item => {
          const itemData = item.email.toUpperCase();
          const textData = txt.toUpperCase();
          return itemData.includes(textData);
        });
        const updatedNotifyList = newArray.map(item => ({
          ...item,
          selected: selectedNotifyList.includes(item.id),
        }));
        setNotifyList(updatedNotifyList);
      } else {
        const updatedNotifyList = HrMailngData.map(item => ({
          ...item,
          selected: selectedNotifyList.includes(item.id),
        }));
        setNotifyList(updatedNotifyList);
      }
    },
    [showNotifyList, selectedNotifyList],
  );

  const editRemark = useCallback((txt: string) => {
    setRemark(txt);
  }, []);

  const clickCheckBox = useCallback(
    (ITEM: any) => {
      let newArray = [];
      let selectedId = [...selectedNotifyList];
      for (let index = 0; index < notifyList.length; index++) {
        if (notifyList[index]?.id === ITEM?.id) {
          newArray.push({
            id: notifyList[index].id,
            email: notifyList[index].email,
            selected: !notifyList[index].selected,
          });
          if (!notifyList[index].selected) {
            selectedId.push(ITEM?.id);
            setSelectedNotifyList(selectedId);
          } else {
            const updatedArray = selectedNotifyList.filter(
              item => item !== notifyList[index].id,
            );
            setSelectedNotifyList(updatedArray);
          }
        } else {
          newArray.push(notifyList[index]);
        }
      }
      setNotifyList(newArray);
    },
    [notifyList, selectedNotifyList],
  );

  const clickSubmit = useCallback(() => {
    Keyboard.dismiss();
    const isEmpty = selectedLeave.every(item => item.trim() === '');
    if (!selectedLeaveUnit) {
      Toast.error('Please select leave unit first');
    } else if (leaveArray?.length === 0) {
      Toast.error('Please select leave period');
    } else if (isEmpty) {
      Toast.error('Please select leave details');
    } else if (selectedNotifyList?.length === 0) {
      Toast.error('Please select atleast one notify person');
    } else {
      Toast.success('Data submit successfully');
    }
  }, [selectedLeaveUnit, leaveArray, selectedLeave, selectedNotifyList]);

  const openCloseNotifyDropDown = useCallback(() => {
    Keyboard.dismiss();
    setShowNotifyList(!showNotifyList);
  }, [showNotifyList]);

  return (
    <KeyboardAvoidingView
      style={styles.main}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? verticalScale(45) : 0}>
      <Header showBackButton={true} title="Apply Leave" />
      <ScrollView
        ref={scrollRef}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={styles.sub_Main}
        contentContainerStyle={styles.content_Con}>
        <View style={styles.main_Child}>
          <LeaveTypeLayout onClickType={clickLeaveType} />
          <LeaveUnitLayout
            selectedUnit={selectedLeaveUnit}
            onClickUnit={clickUnit}
            onClickLeaveUnit={showHideLeaveUnit}
            showLeaveUnit={showLeaveUnit}
            showLeaveCalendar={showLeaveCalendar}
            onClickLeavePeriod={showHideLeaveCalendar}
            onClickCalendar={clickCalendar}
            leaveJson={leaveJson}
            leavePeriodArray={leaveArray}
          />
          {!showLeaveCalendar && (
            <LeaveDetailsLayout
              list={leaveArray}
              selectedLeaveType={selectedLeave}
              clickLeaveFullHalf={clickLeaveOption}
              deleteLeave={clickDeleteLeave}
            />
          )}
          <NotifyPersonLayout
            value={notifyPersonName}
            onChangeText={editNotifyPerson}
            list={notifyList}
            onClickCheckBox={clickCheckBox}
            remarkValue={remark}
            onRemarkChange={editRemark}
            refRemark={remarkRef}
            refNotify={notifyRemark}
            clickSubmitButton={clickSubmit}
            clickNotifyDropDown={openCloseNotifyDropDown}
            showList={showNotifyList}
            selectedList={selectedNotifyList}
          />
          <LeaveBarChat />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  sub_Main: {
    backgroundColor: COLOR.GREY,
    flex: 1,
  },
  content_Con: {
    paddingBottom: verticalScale(100),
  },
  main_Child: {
    width: '96%',
    height: '100%',
    marginHorizontal: '2%',
  },
});
export default ApplyLeave;
