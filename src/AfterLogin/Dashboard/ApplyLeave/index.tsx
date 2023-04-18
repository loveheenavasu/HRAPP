import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../../CommonComponent/Header';
import COLOR from '../../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import LeaveDetailsLayout from './LeaveDetailsLayout';
import Label from '../../../CommonComponent/Lable';
import {LeaveDetailsArr} from '../../../Util/DummyData';
import AddNotifySubmitCard from './AddNotifySubmitCard';
import LeaveTypeLayout from './LeaveTypeLayout';
import {useState} from 'react';
import LeaveUnitLayout from './LeaveUnitLayout';
import Test from './Test';

const ApplyLeave = () => {
  const [showLeaveType, setShowLeaveType] = useState<boolean>(false);
  const [showLeaveUnit, setShowLeaveUnit] = useState<boolean>(false);
  const [selectedLeaveUnit, setSelectedLeaveUnit] = useState<string>('');
  const [selectedLeavePeriod, setSelectedLeavePeriod] = useState<string>('');
  const [showLeaveCalendar, setShowLeaveCalendar] = useState<boolean>(false);

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
              onClickDropDown={() => setShowLeaveType(!showLeaveType)}
              onClickType={() => setShowLeaveType(false)}
            />
            <LeaveUnitLayout
              onClickUnit={item => {
                setSelectedLeaveUnit(item?.value);
                setShowLeaveUnit(false);
              }}
              showLeaveUnit={showLeaveUnit}
              onClickLeaveUnit={() => setShowLeaveUnit(!showLeaveUnit)}
              selectedUnit={selectedLeaveUnit}
              selectedLeaveRange={selectedLeavePeriod}
              onClickLeavePeriod={() =>
                setShowLeaveCalendar(!showLeaveCalendar)
              }
              showLeaveCalendar={showLeaveCalendar}
            />
            <Test />
            {/* <LeaveDetailsLayout leaveDetails={LeaveDetailsArr} /> */}
            {/* <AddNotifySubmitCard /> */}
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
