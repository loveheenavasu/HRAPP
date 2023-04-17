import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {} from 'react-native';
import Header from '../../../CommonComponent/Header';
import COLOR from '../../../Util/Color';
import Label from '../../../CommonComponent/Lable';
import StaffDropDownLayout from './StaffDropDown';
import YearMonthDropDown from './YearMonthDropDown';
import ToastMsg from '../../../CommonComponent/Toast/CustomToast';

const LeaveHistory = () => {
  const [personalRadio, setPersonalRadio] = useState<boolean>(true);
  const [staffRadio, setStaffRadio] = useState<boolean>(false);
  const [yearlyRadio, setYearlyRadio] = useState<boolean>(true);
  const [monthlyRadio, setMonthlyRadio] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [showYearDropDown, setShowshowYearDropDown] = useState<boolean>(true);
  const [showYearList, setShowYearList] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [showMonthList, setShowMonthList] = useState<boolean>(false);

  const clickApplyYear = () => {
    if (!selectedYear) {
      ToastMsg({
        status: 'error',
        msg: 'Please select year first',
      });
    } else {
      setShowYearList(false);
    }
  };
  const clickApplyMonth = () => {
    if (!selectedMonth) {
      ToastMsg({
        status: 'error',
        msg: 'Please select month first',
      });
    } else {
      setShowMonthList(false);
    }
  };

  return (
    <>
      <Header title="Leave History" showBackButton={true} />
      <ScrollView style={styles.main}>
        <View style={styles.sub_Main}>
          <StaffDropDownLayout
            personal={personalRadio}
            staff={staffRadio}
            yearly={yearlyRadio}
            monthly={monthlyRadio}
            onClickPersonal={() => {
              setPersonalRadio(true);
              setStaffRadio(false);
            }}
            onClickStaff={() => {
              setStaffRadio(true);
              setPersonalRadio(false);
            }}
            onClickYearly={() => {
              setYearlyRadio(true);
              setMonthlyRadio(false);
              setShowshowYearDropDown(true);
              setShowMonthList(false);
            }}
            onClickMonthly={() => {
              setMonthlyRadio(true);
              setYearlyRadio(false);
              setShowshowYearDropDown(false);
              setShowYearList(false);
            }}
          />
          <YearMonthDropDown
            onClickMonthValue={item => setSelectedMonth(item?.value)}
            selectedMonth={selectedMonth}
            showYear={showYearDropDown}
            onClickDropDown={() => setShowYearList(!showYearList)}
            showYearList={showYearList}
            onClickYearValue={item => setSelectedYear(item?.value)}
            selectedYear={selectedYear}
            onClickMonthDropDown={() => setShowMonthList(!showMonthList)}
            showMonthList={showMonthList}
            onClickMonthApply={() => clickApplyMonth()}
            onClickMonthCancel={() => setShowMonthList(false)}
            onClickYearApply={() => clickApplyYear()}
            onClickYearCancel={() => setShowYearList(false)}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR.GREY,
  },
  sub_Main: {
    width: '96%',
    height: '100%',
    marginHorizontal: '2%',
  },
});

export default LeaveHistory;
