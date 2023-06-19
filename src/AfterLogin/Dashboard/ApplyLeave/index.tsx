import React, {FC} from 'react';
import {useCallback, useEffect, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {verticalScale} from 'react-native-size-matters';
import {Header} from '@CommonComponent';
import {COLOR, HrMailngData, Toast} from '@Util';
import LeaveDetailsLayout from './LeaveDetailsLayout';
import LeaveBarChat from './LeaveBarChart';
import LeaveTypeLayout from './LeaveTypeLayout';
import LeaveUnitLayout from './LeaveUnitLayout';
import NotifyPersonLayout from './NotifyPersonLayout';
import styles from './styles';
import strings from '@src/Language/strings';

interface dataProps {
  showLeaveType: boolean;
  showLeaveUnit: boolean;
  showLeaveCalendar: boolean;
  selectedLeaveUnit: string;
  leaveJson: Object;
  leaveArray: [];
  notifyPersonName: string;
  remark: string;
  showNotifyList: boolean;
  selectedNotifyList: [];
}

const ApplyLeave: FC = () => {
  const [data, setData] = useState<dataProps>({
    showLeaveType: false,
    showLeaveUnit: false,
    showLeaveCalendar: false,
    selectedLeaveUnit: '',
    leaveJson: {},
    leaveArray: [],
    notifyPersonName: '',
    remark: '',
    showNotifyList: false,
    selectedNotifyList: [],
  });

  const [selectedLeave, setSelectedLeave] = useState(
    Array(data?.leaveArray?.length).fill(''),
  );
  const [notifyList, setNotifyList] = useState<any>(HrMailngData);
  const scrollRef = useRef<ScrollView>(null);
  const remarkRef = useRef<TextInput>(null);
  const notifyRemark = useRef<TextInput>(null);
  const focus = useIsFocused();

  useEffect(() => {
    scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});
    setData(predata => ({
      ...predata,
      leaveArray: [],
      leaveJson: {},
      selectedLeaveUnit: '',
    }));
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
    setData(predata => ({
      ...predata,
      selectedLeaveUnit: item?.value,
      showLeaveUnit: false,
    }));
  }, []);

  const showHideLeaveUnit = useCallback(() => {
    setData(predata => ({...predata, showLeaveUnit: !data.showLeaveUnit}));
  }, [data.showLeaveUnit]);

  const showHideLeaveCalendar = useCallback(() => {
    setData(predata => ({
      ...predata,
      showLeaveCalendar: !data?.showLeaveCalendar,
    }));
  }, [data.showLeaveCalendar]);

  const clickLeaveType = useCallback(() => {
    setData(predata => ({...predata, showLeaveType: false}));
  }, []);

  const clickCalendar = useCallback(
    (item: any) => {
      let mLeaveArray = data?.leaveArray;
      if (mLeaveArray?.includes(item?.dateString)) {
        let mNewArray = mLeaveArray.filter(function (ITEM: any) {
          return ITEM !== item?.dateString;
        });
        mLeaveArray = [...mNewArray];
      } else {
        mLeaveArray.push(item?.dateString);
      }
      setData(predata => ({...predata, leaveArray: mLeaveArray}));
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
      setData(predata => ({...predata, leaveJson: mark}));
      setSelectedLeave(Array(data?.leaveArray?.length).fill(''));
    },
    [data.leaveArray],
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
      const index1 = data?.leaveArray.indexOf(index);
      let newSelectedLeave = selectedLeave.filter((INDEX, item) => {
        return item !== index1;
      });
      setSelectedLeave(newSelectedLeave);
      let newArary = data?.leaveArray.filter(item => {
        return item !== index;
      });
      setData(predata => ({...predata, leaveArray: newArary}));
      let mark: any = {};
      for (let index3 = 0; index3 < newArary.length; index3++) {
        mark[newArary[index3]] = {
          color: COLOR.PRIMARY,
          textColor: COLOR.WHITE,
          selected: true,
          marked: false,
          selectedColor: COLOR.PRIMARY,
        };
      }
      setData(predata => ({...predata, leaveJson: mark}));
    },
    [data?.leaveArray, selectedLeave],
  );
  const editNotifyPerson = useCallback(
    (txt: string) => {
      const {selectedNotifyList} = data;
      setData(predata => ({
        ...predata,
        notifyPersonName: txt,
        showNotifyList: true,
      }));
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
    [data.showNotifyList, data.selectedNotifyList],
  );

  const editRemark = useCallback((txt: string) => {
    setData(predata => ({...predata, remark: txt}));
  }, []);

  const clickCheckBox = useCallback(
    (ITEM: any) => {
      const {selectedNotifyList} = data;
      let newArray = [];
      let selectedId = [...data?.selectedNotifyList];
      for (let index = 0; index < notifyList.length; index++) {
        if (notifyList[index]?.id === ITEM?.id) {
          newArray.push({
            id: notifyList[index].id,
            email: notifyList[index].email,
            selected: !notifyList[index].selected,
          });
          if (!notifyList[index].selected) {
            selectedId.push(ITEM?.id);
            setData(predata => ({...predata, selectedNotifyList: selectedId}));
          } else {
            const updatedArray = selectedNotifyList.filter(
              item => item !== notifyList[index].id,
            );
            setData(predata => ({
              ...predata,
              selectedNotifyList: updatedArray,
            }));
          }
        } else {
          newArray.push(notifyList[index]);
        }
      }
      setNotifyList(newArray);
    },
    [notifyList, data.selectedNotifyList],
  );

  const clickSubmit = useCallback(() => {
    const {selectedLeaveUnit, leaveArray, selectedNotifyList} = data;
    Keyboard.dismiss();
    const isEmpty = selectedLeave.every(item => item.trim() === '');
    if (!selectedLeaveUnit) {
      Toast.error(strings.PleaseSelect_LeaveFirst);
    } else if (leaveArray?.length === 0) {
      Toast.error(strings.PleaseSelect_LeavePeriod);
    } else if (isEmpty) {
      Toast.error(strings.PleaseSelect_LeaveDetails);
    } else if (selectedNotifyList?.length === 0) {
      Toast.error(strings.PleaseSelect_NotifyPerson);
    } else {
      Toast.success(strings?.DataSubmit_Successfully);
    }
  }, [
    data.selectedLeaveUnit,
    data.leaveArray,
    selectedLeave,
    data.selectedNotifyList,
  ]);

  const openCloseNotifyDropDown = useCallback(() => {
    Keyboard.dismiss();
    setData(predata => ({...predata, showNotifyList: !data?.showNotifyList}));
  }, [data?.showNotifyList]);

  return (
    <KeyboardAvoidingView
      style={styles.main}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? verticalScale(45) : 0}>
      <Header showBackButton={true} title={strings.ApplyLeave} />
      <ScrollView
        ref={scrollRef}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={styles.sub_Main}
        contentContainerStyle={styles.content_Con}>
        <View style={styles.main_Child}>
          <LeaveTypeLayout onClickType={clickLeaveType} />
          <LeaveUnitLayout
            selectedUnit={data?.selectedLeaveUnit}
            onClickUnit={clickUnit}
            onClickLeaveUnit={showHideLeaveUnit}
            showLeaveUnit={data?.showLeaveUnit}
            showLeaveCalendar={data?.showLeaveCalendar}
            onClickLeavePeriod={showHideLeaveCalendar}
            onClickCalendar={clickCalendar}
            leaveJson={data?.leaveJson}
            leavePeriodArray={data?.leaveArray}
          />
          {!data?.showLeaveCalendar && (
            <LeaveDetailsLayout
              list={data?.leaveArray}
              selectedLeaveType={selectedLeave}
              clickLeaveFullHalf={clickLeaveOption}
              deleteLeave={clickDeleteLeave}
            />
          )}
          <NotifyPersonLayout
            value={data?.notifyPersonName}
            onChangeText={editNotifyPerson}
            list={notifyList}
            onClickCheckBox={clickCheckBox}
            remarkValue={data?.remark}
            onRemarkChange={editRemark}
            refRemark={remarkRef}
            refNotify={notifyRemark}
            clickSubmitButton={clickSubmit}
            clickNotifyDropDown={openCloseNotifyDropDown}
            showList={data?.showNotifyList}
          />
          <LeaveBarChat />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ApplyLeave;
