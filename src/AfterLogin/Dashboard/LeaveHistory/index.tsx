import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../../../CommonComponent/Header';
import COLOR from '../../../Util/Color';
import StaffDropDownLayout from './StaffDropDown';
import YearMonthDropDown from './YearMonthDropDown';
import ToastMsg from '../../../CommonComponent/Toast/CustomToast';
import CalendarListLayout from './CalendarListLayout';
import Loader from '../../../CommonComponent/Loader';
import CalenderYearlyLayout from './CalenderYearlyLayout';
import {useIsFocused} from '@react-navigation/native';

const monthArray: any = [
  'Jan',
  'Feb',
  'Mar',
  'April',
  'May',
  'Jun',
  'Jully',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

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
  const [currentMonth, setCurrentMonth] = useState<string>('');
  const [currentYearMonth, setCurrentYearMonth] = useState<string>('');
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [leaveMonthJson, setLeaveMonthJson] = useState<Object>({});

  const mFocus = useIsFocused();

  useEffect(() => {
    setSelectedYear('');
    setSelectedMonth('');
    setCurrentMonth('');
  }, [mFocus]);

  const clickApplyYear = () => {
    if (!selectedYear) {
      ToastMsg({
        status: 'error',
        msg: 'Please select year first',
      });
    } else {
      setCurrentYearMonth('');
      setShowLoader(true);
      let monthName = selectedYear + '-' + '01' + '-' + '01';
      setShowYearList(false);
      setTimeout(() => {
        setCurrentYearMonth(monthName);
        setShowLoader(false);
      }, 1200);
    }
  };

  const clickApplyMonth = () => {
    if (!selectedMonth) {
      ToastMsg({
        status: 'error',
        msg: 'Please select month first',
      });
    } else {
      setShowLoader(true);
      setCurrentMonth('');
      const currentYear = new Date().getFullYear();
      const getDateStr = (month: string, day: string) => {
        const paddedMonth = (monthArray.indexOf(month) + 1)
          .toString()
          .padStart(2, '0');
        return `${currentYear}-${paddedMonth}-${day}`;
      };
      const monthName = getDateStr(selectedMonth, '01');
      const lastMonthName = getDateStr(selectedMonth, '10');
      let mark: any = {};
      for (let index = 1; index < 11; index++) {
        const dayStr = index.toString().padStart(2, '0');
        if (index === 1) {
          mark[monthName] = {
            startingDay: true,
            color: COLOR.PRIMARY,
            textColor: COLOR.WHITE,
          };
        } else if (index === 10) {
          mark[lastMonthName] = {
            endingDay: true,
            textColor: COLOR.WHITE,
            selected: true,
            color: COLOR.PRIMARY,
          };
        } else {
          const dateStr = getDateStr(selectedMonth, dayStr);
          mark[dateStr] = {
            color: COLOR.PRIMARY,
            textColor: COLOR.WHITE,
          };
        }
      }
      setLeaveMonthJson(mark);
      setShowMonthList(false);
      setTimeout(() => {
        setCurrentMonth(monthName);
        setShowLoader(false);
      }, 1200);
    }
  };

  return (
    <>
      <Header title="Leave History" showBackButton={true} />
      <ScrollView style={styles.main}>
        <View style={styles.sub_Main}>
          {showLoader && <Loader />}
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
              if (currentYearMonth) {
                clickApplyYear();
              }
            }}
            onClickMonthly={() => {
              setMonthlyRadio(true);
              setYearlyRadio(false);
              setShowshowYearDropDown(false);
              setShowYearList(false);
              if (currentMonth) {
                clickApplyMonth();
              }
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
            onClickMonthCancel={() => {
              let dateArray = currentMonth?.split('-');
              let currentIndex = dateArray[1];
              setSelectedMonth(monthArray[parseInt(currentIndex) - 1]);
              setShowMonthList(false);
            }}
            onClickYearApply={() => clickApplyYear()}
            onClickYearCancel={() => {
              let dateArray = currentYearMonth?.split('-');
              let currentIndex = dateArray[0];
              setSelectedYear(currentIndex);
              setShowYearList(false);
            }}
          />
          {currentMonth && selectedMonth && !showYearDropDown && (
            <CalendarListLayout
              currentMonth={currentMonth}
              leaveDate={leaveMonthJson}
            />
          )}
          {currentYearMonth && selectedYear && showYearDropDown && (
            <CalenderYearlyLayout currentMonth={currentYearMonth} />
          )}
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
