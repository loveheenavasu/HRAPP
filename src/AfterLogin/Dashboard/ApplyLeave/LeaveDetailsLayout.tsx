import { Alert, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native"
import COLOR from "../../../Util/Color"
import { scale, verticalScale } from "react-native-size-matters"
import Label from "../../../CommonComponent/Lable"
import Calender from 'react-native-vector-icons/AntDesign'
import DropDownSelect from "../../../CommonComponent/DropDownSelect"
import { LeaveDays,LeaveUnit } from "../../../Util/DummyData"

interface Props {
  leaveDetails: object[]
}

const LeaveDetailsLayout = (props: Props) => {
  const { leaveDetails } = props;
  return (
    <View style={styles.main}>
      <Label title='Leave Type' style={styles.headingTxt} />
      <View style={styles.rowView}>
        <View style={styles.leaveType_Box}>
          <Label title='Annual' style={styles.leaveType_txt} />
        </View>
        <View>
          <Label title="Annual Balance" style={styles.smallTxt} />
          <Label title="5.5 days" style={styles.smallTxt} />
        </View>

      </View>
      <Label title='Leave Unit' style={styles.headingTxt} />
      <DropDownSelect
        Data={LeaveUnit}
        displayTxt='Select leave unit'
        onSelect={(selectedItem: any) => {
          Alert.alert('selected-->', selectedItem)
        }}
      />
      <Label title='Leave Period' style={styles.headingTxt} />
      <TouchableOpacity style={styles.calenderBtn}>
        <View style={{ width: '90%' }}>
          <Label title='10/04/2023 - 10/04/2023' style={styles.peroidTxt} />
        </View>
        <View style={styles.calender_icon_box}>
          <Calender name="calendar" size={scale(17)} color={COLOR.LIGHT_GREY} />
        </View>
      </TouchableOpacity>
      <Label title='Total leave days' style={styles.headingTxt} />
      <Label title='2 days' style={styles.smallTxt} />
      <Label title='Leave Details' style={styles.headingTxt} />
      <ScrollView style={styles.leave_Details_View}>
        {
          leaveDetails?.map((i, index) => {
            return (
              <View style={styles.rowView} key={index}>
                <Label title={i?.date} style={styles.smallTxt} />
                <DropDownSelect
                  Data={LeaveDays}
                  displayTxt='Select'
                  onSelect={(selectedItem: any) => {
                    Alert.alert('day selected-->',selectedItem)
                  //  setLeaveDay(selectedItem)
                  }}
                  dropDownStyle={styles.small_DropDown}
                />
                <Label title={i?.day} style={styles.smallTxt} />
              </View>
            )
          })
        }
      </ScrollView>
      <Label title='❗This excludes pubic holidays,non working days and taken leaves.' style={styles.warning_Txt}/>
    </View>
  )
}

export default LeaveDetailsLayout

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLOR.WHITE,
    width: '100%',
    maxHeight: verticalScale(500),
    marginTop: verticalScale(6),
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
    paddingTop: scale(2)

  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingLeft: scale(5),
    marginVertical: verticalScale(6),
    borderBottomColor: COLOR.GREY,
    borderBottomWidth: 1,
    paddingBottom: scale(10),
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
  headingTxt: {
    marginVertical: verticalScale(1),
    fontSize: scale(13),
    fontWeight: '600',
    color: COLOR.DARK_GRAY
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
    paddingHorizontal:scale(3),
    marginTop:verticalScale(3)
  },
  small_DropDown: {
    width: '30%',
    height: '100%',
  },
  warning_Txt:{
    fontSize:scale(10),marginVertical:verticalScale(1)}
}
)