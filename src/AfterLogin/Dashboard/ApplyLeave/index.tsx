import React from 'react';
import {useCallback, useEffect, useRef, useState} from 'react';
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
import ToastMsg from '../../../CommonComponent/Toast/CustomToast';

const ApplyLeave = () => {
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
  const [notifyList, setNotifyList] = useState<any>([]);
  const [remark, setRemark] = useState<string>('');

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
    console.log('--item?.value----->', item?.value);
    setSelectedLeaveUnit(item?.value);
    setShowLeaveUnit(false);
  }, []);

  const showHideLeaveUnit = useCallback(() => {
    setShowLeaveUnit(!showLeaveUnit);
  }, [showLeaveUnit]);

  const showHideLeaveCalendar = useCallback(() => {
    setShowLeaveCalendar(!showLeaveCalendar);
  }, [showLeaveCalendar]);

  const clickLeaveType = useCallback(() => {
    setShowLeaveType(false);
  }, []);

  const clickLeaveDropDown = useCallback(() => {
    setShowLeaveType(!showLeaveType);
  }, [showLeaveType]);

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
    [leaveArray],
  );
  const editNotifyPerson = useCallback((txt: string) => {
    setNotifyPersoneName(txt);
    if (txt) {
      let newArray = HrMailngData.filter(item => {
        const itemData = item.email.toUpperCase();
        const textData = txt.toUpperCase();
        return itemData.includes(textData);
      });
      setNotifyList(newArray);
    } else {
      setNotifyList([]);
    }
  }, []);

  const editRemark = useCallback((txt: string) => {
    setRemark(txt);
  }, []);

  const clickCheckBox = useCallback(
    (ITEM: any) => {
      let newArray = [];
      for (let index = 0; index < notifyList.length; index++) {
        if (notifyList[index]?.id === ITEM?.id) {
          newArray.push({
            id: notifyList[index].id,
            email: notifyList[index].email,
            selected: !notifyList[index].selected,
          });
        } else {
          newArray.push(notifyList[index]);
        }
      }
      setNotifyList(newArray);
    },
    [notifyList],
  );

  const clickSubmit = useCallback(() => {
    if (!selectedLeaveUnit) {
      ToastMsg({
        status: 'error',
        msg: 'Please select leave unit first',
      });
    } else if (leaveArray?.length === 0) {
      ToastMsg({
        status: 'error',
        msg: 'Please select leave period',
      });
    }
  }, [selectedLeaveUnit, leaveArray]);

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
          <LeaveTypeLayout
            showList={showLeaveType}
            onClickDropDown={clickLeaveDropDown}
            onClickType={clickLeaveType}
          />
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
