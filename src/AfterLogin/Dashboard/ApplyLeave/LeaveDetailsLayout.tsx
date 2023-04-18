import { Alert, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native"
import COLOR from "../../../Util/Color"
import { scale, verticalScale } from "react-native-size-matters"
import Label from "../../../CommonComponent/Lable"
import Calender from 'react-native-vector-icons/AntDesign'
import DropDownSelect from "../../../CommonComponent/DropDownSelect"
import { LeaveDays, LeaveUnit } from "../../../Util/DummyData"
import commonStyle from "./commonStyle"
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useState } from "react"

interface Props {
  leaveDetails: object[]
}

const LeaveDetailsLayout = (props: Props) => {
  const { leaveDetails } = props;
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState('');
  console.log('selected date--->', selected);

  const getFormattedDate = (displayDate: boolean = false,dateToformat:string='') => {  
    
    let current_Date = new Date();
    let formatMonth = current_Date.getMonth() + 1 < 10 ? `0${current_Date.getMonth() + 1}` : current_Date.getMonth() + 1;
    let formatDate = current_Date.getDate() < 10 ? `0${current_Date.getDate()}` : current_Date.getDate();
      
    if(dateToformat){
      return dateToformat?.split('-')?.reverse()?.join(',')?.replaceAll(',', '-');
    }
    if (displayDate) {
      let ddmmyyyy = `${current_Date.getFullYear()}-${formatMonth}-${formatDate}`?.split('-')?.reverse()?.join(',')?.replaceAll(',', '-');
      return ddmmyyyy;
    }
    console.log('Formatted Date--->', `${current_Date.getFullYear()}-${formatMonth}-${formatDate}`);
    return `${current_Date.getFullYear()}-${formatMonth}-${formatDate}`
  }


  return (
    <View style={commonStyle.main}>
      <Label title='Leave Type' style={commonStyle.headingTxt} />
      <View style={commonStyle.rowView}>
        <View style={styles.leaveType_Box}>
          <Label title='Annual' style={styles.leaveType_txt} />
        </View>
        <View>
          <Label title="Annual Balance" style={styles.smallTxt} />
          <Label title="5.5 days" style={styles.smallTxt} />
        </View>

      </View>
      <Label title='Leave Unit' style={commonStyle.headingTxt} />
      <DropDownSelect
        Data={LeaveUnit}
        displayTxt='Select leave unit'
        onSelect={(selectedItem: any) => {
          Alert.alert('selected-->', selectedItem)
        }}
      />
      <Label title='Leave Period' style={commonStyle.headingTxt} />
      <TouchableOpacity style={styles.calenderBtn} onPress={() => setShowCalendar(!showCalendar)}>
        <View style={{ width: '90%' }}>
          <Label title={selected ? getFormattedDate(false,selected) : getFormattedDate(true)} style={styles.peroidTxt} />
        </View>
        <View style={styles.calender_icon_box}>
          <Calender name="calendar" size={scale(17)} color={COLOR.LIGHT_GREY} />
        </View>
      </TouchableOpacity>
      {
        showCalendar ? (
          <>
            <Calendar
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: 350,
              }}
              // Specify the current date
              // current={'2023-04-01'}
              // Callback that gets called when the user selects a day
              onDayPress={day => {
                console.log('selected day', day);
              //  let mm_dd_yyyy = getFormattedDate(day?.dateString)
                setSelected(day.dateString)
                // setShowCalendar(false)
              }}
              markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
              }}
              minDate={getFormattedDate()}
            />
          </>

        ) : null
      }
      <Label title='Total leave days' style={commonStyle.headingTxt} />
      <Label title='2 days' style={styles.smallTxt} />
      <Label title='Leave Details' style={commonStyle.headingTxt} />
      <ScrollView style={styles.leave_Details_View}>
        {
          leaveDetails?.map((i, index) => {
            return (
              <View style={commonStyle.rowView} key={index}>
                <Label title={i?.date} style={styles.smallTxt} />
                <DropDownSelect
                  Data={LeaveDays}
                  displayTxt='Select'
                  onSelect={(selectedItem: any) => {
                    Alert.alert('day selected-->', selectedItem)
                  }}
                  dropDownStyle={styles.small_DropDown}
                />
                <Label title={i?.day} style={styles.smallTxt} />
              </View>
            )
          })
        }
      </ScrollView>
      <Label title='❗This excludes pubic holidays,non working days and taken leaves.' style={styles.warning_Txt} />


    </View>
  )
}

export default LeaveDetailsLayout

const styles = StyleSheet.create({
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
    marginVertical: verticalScale(1)
  },
  boldsmallTxt: {
    fontSize: scale(12),
    fontWeight: '500'
  },
  dropBtn: {
    // borderWidth:1,
    borderRadius: scale(5),
    width: '95%',
    height: '10%',
    marginTop: verticalScale(7),
    marginBottom: verticalScale(7)
  },
  dropBtnTxt: {
    fontSize: scale(12)
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
    width: '10%'
  },
  peroidTxt: {
    marginVertical: scale(1),
    marginLeft: scale(7),
    fontSize: scale(12)
  },
  leave_Details_View: {
    borderColor: COLOR.GREY,
    borderWidth: 1,
    paddingHorizontal: scale(3),
    marginTop: verticalScale(3)
  },
  small_DropDown: {
    width: '30%',
    height: '100%',
  },
  warning_Txt: {
    fontSize: scale(10), marginVertical: verticalScale(1)
  }
}
)