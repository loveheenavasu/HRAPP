import React, {FC, useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {COLOR, Toast} from '@Util';
import {Header, Loader} from '@CommonComponent';
import strings from '@src/Language/strings';
import StaffDropDownLayout from './StaffDropDown';
import YearMonthDropDown from './YearMonthDropDown';
import CalendarListLayout from './CalendarListLayout';
import CalenderYearlyLayout from './CalenderYearlyLayout';

import styles from './styles';

const monthArray: any = [
  strings?.WeekName[1],
  strings?.WeekName[2],
  strings?.WeekName[3],
  strings?.WeekName[4],
  strings?.WeekName[5],
  strings?.WeekName[6],
  strings?.WeekName[7],
  strings?.WeekName[8],
  strings?.WeekName[9],
  strings?.WeekName[10],
  strings?.WeekName[11],
  strings?.WeekName[12],
];

interface userData {
  personalRadio: boolean;
  staffRadio: boolean;
  yearlyRadio: boolean;
  monthlyRadio: boolean;
  showYearDropDown: boolean;
  showYearList: boolean;
  showLoader: boolean;
  showMonthList: boolean;
  selectedMonth: string;
  selectedYear: string;
  currentMonth: string;
  currentYearMonth: string;
  leaveMonthJson: Object;
}

const LeaveHistory: FC = () => {
  const [data, setData] = useState<userData>({
    personalRadio: true,
    staffRadio: false,
    yearlyRadio: true,
    monthlyRadio: false,
    showYearDropDown: true,
    showYearList: false,
    showLoader: false,
    showMonthList: false,
    selectedMonth: '',
    selectedYear: '',
    currentMonth: '',
    currentYearMonth: '',
    leaveMonthJson: {},
  });
  const mFocus = useIsFocused();

  useEffect(() => {
    setData(predata => ({
      ...predata,
      selectedYear: '',
      selectedMonth: '',
      currentMonth: '',
    }));
  }, [mFocus]);

  const clickApplyYear = () => {
    const {selectedYear} = data;
    if (!selectedYear) {
      Toast.error('Please select year first');
    } else {
      setData(predata => ({
        ...predata,
        currentYearMonth: '',
        showLoader: true,
        showYearList: false,
      }));

      let monthName = selectedYear + '-' + '01' + '-' + '01';
      setTimeout(() => {
        setData(predata => ({
          ...predata,
          currentYearMonth: monthName,
          showLoader: false,
        }));
      }, 1200);
    }
  };

  const clickApplyMonth = () => {
    const {selectedMonth} = data;
    if (!selectedMonth) {
      Toast.error('Please select month first');
    } else {
      setData(predata => ({...predata, showLoader: true, currentMonth: ''}));
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
      setData(predata => ({
        ...predata,
        showMonthList: false,
        leaveMonthJson: mark,
      }));
      setTimeout(() => {
        setData(predata => ({
          ...predata,
          currentMonth: monthName,
          showLoader: false,
        }));
      }, 1200);
    }
  };

  return (
    <>
      <Header title={strings?.LeaveHistory} showBackButton={true} />
      <ScrollView style={styles.main}>
        <View style={styles.sub_Main}>
          <Loader Visible={data?.showLoader} />
          <StaffDropDownLayout
            personal={data?.personalRadio}
            staff={data?.staffRadio}
            yearly={data?.yearlyRadio}
            monthly={data?.monthlyRadio}
            onClickPersonal={() => {
              setData(predata => ({
                ...predata,
                personalRadio: true,
                staffRadio: false,
              }));
            }}
            onClickStaff={() => {
              setData(predata => ({
                ...predata,
                personalRadio: false,
                staffRadio: true,
              }));
            }}
            onClickYearly={() => {
              setData(predata => ({
                ...predata,
                yearlyRadio: true,
                monthlyRadio: false,
                showYearDropDown: false,
                showMonthList: false,
              }));

              if (data?.currentYearMonth) {
                clickApplyYear();
              }
            }}
            onClickMonthly={() => {
              setData(predata => ({
                ...predata,
                yearlyRadio: false,
                monthlyRadio: true,
                showYearDropDown: false,
                showMonthList: false,
              }));

              if (data?.currentMonth) {
                clickApplyMonth();
              }
            }}
          />
          <YearMonthDropDown
            onClickMonthValue={item =>
              setData(predata => ({...predata, selectedMonth: item?.value}))
            }
            selectedMonth={data?.selectedMonth}
            showYear={data?.showYearDropDown}
            onClickDropDown={() =>
              setData(predata => ({
                ...predata,
                showYearList: !data?.showYearList,
              }))
            }
            showYearList={data?.showYearList}
            onClickYearValue={item =>
              setData(predata => ({...predata, selectedYear: item?.value}))
            }
            selectedYear={data?.selectedYear}
            onClickMonthDropDown={() =>
              setData(predata => ({
                ...predata,
                showMonthList: !data?.showMonthList,
              }))
            }
            showMonthList={data?.showMonthList}
            onClickMonthApply={() => clickApplyMonth()}
            onClickMonthCancel={() => {
              let dateArray = data?.currentMonth?.split('-');
              let currentIndex = dateArray[1];
              setData(predata => ({
                ...predata,
                selectedMonth: monthArray[parseInt(currentIndex) - 1],
                showMonthList: false,
              }));
            }}
            onClickYearApply={() => clickApplyYear()}
            onClickYearCancel={() => {
              let dateArray = data?.currentYearMonth?.split('-');
              let currentIndex = dateArray[0];
              setData(predata => ({
                ...predata,
                selectedYear: currentIndex,
                showYearList: false,
              }));
            }}
          />
          {data?.currentMonth &&
            data?.selectedMonth &&
            !data?.showYearDropDown && (
              <CalendarListLayout
                currentMonth={data?.currentMonth}
                leaveDate={data?.leaveMonthJson}
              />
            )}
          {data?.currentYearMonth &&
            data?.selectedYear &&
            data?.showYearDropDown && (
              <CalenderYearlyLayout currentMonth={data?.currentYearMonth} />
            )}
        </View>
      </ScrollView>
    </>
  );
};

export default LeaveHistory;
