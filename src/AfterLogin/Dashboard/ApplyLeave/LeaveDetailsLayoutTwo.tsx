import React from 'react';
import {
  Alert,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import COLOR from '../../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';
import Label from '../../../CommonComponent/Lable';
import DropDownSelect from '../../../CommonComponent/DropDownSelect';
import {LeaveDays} from '../../../Util/DummyData';
import commonStyle from './commonStyle';
import {Calendar} from 'react-native-calendars';
import {useEffect, useState} from 'react';

interface Props {
  leaveDetails: object[];
  showLeaveUnit?: boolean;
  onClickLeaveUnit?: () => void;
}

const LeaveDetailsLayout = ({
  showLeaveUnit,
  leaveDetails,
  onClickLeaveUnit,
}: Props) => {
  const [showCalendar, setShowCalendar] = useState<Boolean>(false);
  const [selectedArr, setSelected] = useState<any>([]);

  let markDatesObj = {};
  const [dateMarkObj, setMarkObj] = useState(markDatesObj);
  const DateArrFun = (markDate: any) => {
    if (selectedArr.findIndex(i => i === markDate) > -1) {
      let unSelectDate = selectedArr.filter(item => item !== markDate);
      setSelected(unSelectDate);
    } else {
      setSelected([...selectedArr, markDate]);
    }
  };

  useEffect(() => {
    getMarkedDates();
  }, [selectedArr?.length]);

  const getMarkedDates = () => {
    selectedArr.map(item => {
      console.log('item====>>', item);
      dateMarkObj[item] = {
        selected: true,
        marked: true,
        selectedColor: 'purple',
      };

      setMarkObj(dateMarkObj);
    });
  };

  console.log('markDatesObj-->>>', dateMarkObj);
 const getFormattedDate = (
    displayDate: boolean = false,
    dateToformat: string = '',
  ) => {
    let current_Date = new Date();
    let formatMonth =
      current_Date.getMonth() + 1 < 10
        ? `0${current_Date.getMonth() + 1}`
        : current_Date.getMonth() + 1;
    let formatDate =
      current_Date.getDate() < 10
        ? `0${current_Date.getDate()}`
        : current_Date.getDate();

    if (dateToformat) {
      return dateToformat
        ?.split('-')
        ?.reverse()
        ?.join(',')
        ?.replaceAll(',', '-');
    }
    if (displayDate) {
      let ddmmyyyy =
        `${current_Date.getFullYear()}-${formatMonth}-${formatDate}`
          ?.split('-')
          ?.reverse()
          ?.join(',')
          ?.replaceAll(',', '-');
      return ddmmyyyy;
    }
    console.log(
      'Formatted Date--->',
      `${current_Date.getFullYear()}-${formatMonth}-${formatDate}`,
    );
    return `${current_Date.getFullYear()}-${formatMonth}-${formatDate}`;
  };

  return (
    <View style={styles.main}>
      {showCalendar ? (
        <>
          <Calendar
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 350,
            }}
           onDayPress={day => {
              console.log('selected day', day);
              DateArrFun(day?.dateString);
            }}
            markedDates={dateMarkObj}
            minDate={getFormattedDate()}
          />
        </>
      ) : null}
      <Label title="Total leave days" style={commonStyle.headingTxt} />
      <Label title="2 days" style={styles.smallTxt} />
      <Label title="Leave Details" style={commonStyle.headingTxt} />
      <ScrollView style={styles.leave_Details_View}>
        {leaveDetails?.map((i, index) => {
          return (
            <View style={commonStyle.rowView} key={index}>
              <Label title={i?.date} style={styles.smallTxt} />
              <DropDownSelect
                Data={LeaveDays}
                displayTxt="Select"
                onSelect={(selectedItem: any) => {
                  Alert.alert('day selected-->', selectedItem);
                }}
                dropDownStyle={styles.small_DropDown}
              />
              <Label title={i?.day} style={styles.smallTxt} />
            </View>
          );
        })}
      </ScrollView>
      <Label
        title="❗This excludes pubic holidays,non working days and taken leaves."
        style={styles.warning_Txt}
      />
    </View>
  );
};

export default LeaveDetailsLayout;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLOR.WHITE,
    width: '100%',
    maxHeight: verticalScale(500),
    marginVertical: verticalScale(3),
    borderRadius: scale(6),
    paddingHorizontal: scale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    paddingBottom: scale(10),
    paddingTop: scale(2),
  },
  title_Label: {
    marginVertical: scale(5),
    marginLeft: scale(1),
  },
  leaveType_Box: {
    borderWidth: 1,
    width: '45%',
    paddingVertical: verticalScale(2),
    borderRadius: scale(7),
  },
  leaveType_txt: {
    marginLeft: scale(9),
  },
  smallTxt: {
    marginVertical: verticalScale(1),
  },
  boldsmallTxt: {
    fontSize: scale(12),
    fontWeight: '500',
  },
  dropBtn: {
    // borderWidth:1,
    borderRadius: scale(5),
    width: '95%',
    height: '10%',
    marginTop: verticalScale(7),
    marginBottom: verticalScale(7),
  },
  dropBtnTxt: {
    fontSize: scale(12),
  },
  calenderBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: COLOR.GREY,
    borderWidth: 1,
    borderRadius: scale(5),
    width: '95%',
    marginTop: verticalScale(7),
    marginBottom: verticalScale(8),

    // paddingVertical:verticalScale(7)
  },
  calender_icon_box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.GREY,
    paddingVertical: verticalScale(7),
    width: '10%',
  },
  peroidTxt: {
    marginVertical: scale(1),
    marginLeft: scale(7),
    fontSize: scale(12),
  },
  leave_Details_View: {
    borderColor: COLOR.GREY,
    borderWidth: 1,
    paddingHorizontal: scale(3),
    marginTop: verticalScale(3),
  },
  small_DropDown: {
    width: '30%',
    height: '100%',
  },
  warning_Txt: {
    fontSize: scale(10),
    marginVertical: verticalScale(1),
  },
});
