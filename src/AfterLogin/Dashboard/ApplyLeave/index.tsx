import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../../CommonComponent/Header';
import COLOR from '../../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import LeaveDetailsLayout from './LeaveDetailsLayout';
import AddNotifySubmitCard from './AddNotifySubmitCard';
import LeaveBarChat from './LeaveBarChart';
import LeaveTypeLayout from './LeaveTypeLayout';
import {FC, useCallback, useState} from 'react';
import LeaveUnitLayout from './LeaveUnitLayout';

const ApplyLeave:FC = () => {
  const [showLeaveType, setShowLeaveType] = useState<boolean>(false);
  const [showLeaveUnit, setShowLeaveUnit] = useState<boolean>(false);
  const [selectedLeaveUnit, setSelectedLeaveUnit] = useState<string>('');
  const [selectedLeavePeriod, setSelectedLeavePeriod] = useState<string>('');
  const [showLeaveCalendar, setShowLeaveCalendar] = useState<boolean>(false);
  const [leaveJson, setLeaveJson] = useState<Object>({});
  const [leaveArray, setLeaveArray] = useState<any>([]);

  let mLeaveArray: any = [];

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

  const clickLeaveType = useCallback(() => {
    setShowLeaveType(false);
  }, []);

  const clickLeaveDropDown = useCallback(() => {
    setShowLeaveType(!showLeaveType);
  }, [showLeaveType]);

  const clickCalendar = useCallback((item: any) => {
    if (mLeaveArray?.includes(item?.dateString)) {
      let mNewArray = mLeaveArray.filter(function (ITEM: any) {
        return ITEM != item?.dateString;
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
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={verticalScale(45)}>
        <Header showBackButton={true} title="Apply Leave" />
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: COLOR.GREY, flex: 1}}
          contentContainerStyle={{
            paddingBottom: verticalScale(100),
            flexGrow: 1,
          }}>
          <View style={{width: '96%', marginHorizontal: '2%'}}>
          <LeaveTypeLayout
              showList={showLeaveType}
              onClickDropDown={clickLeaveDropDown}
              onClickType={clickLeaveType}
            />
            <LeaveUnitLayout
              selectedUnit={selectedLeaveUnit}
              onClickUnit={clickUnit}
              selectedLeaveRange={selectedLeavePeriod}
              onClickLeaveUnit={showHideLeaveUnit}
              showLeaveUnit={showLeaveUnit}
              showLeaveCalendar={showLeaveCalendar}
              onClickLeavePeriod={showHideLeaveCalendar}
              onClickCalendar={clickCalendar}
              leaveJson={leaveJson}
            />
            {!showLeaveCalendar && <LeaveDetailsLayout list={leaveArray} />}
            <AddNotifySubmitCard />
            <LeaveBarChat/>
          </View>
         
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ApplyLeave;

const styles = StyleSheet.create({
  title_Txt: {
    fontSize: scale(15),
    color: COLOR.DARK_GRAY,
    fontWeight: '600',
  },
});
