import {StyleSheet} from 'react-native';
import COLOR from '../../../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';

const dynamicStyles = StyleSheet.create({
  main: {
    backgroundColor: COLOR.WHITE,
    width: '100%',
    maxHeight: verticalScale(1000),
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
  leave_Title: {
    marginVertical: scale(8),
    marginLeft: scale(1),
  },
  leave_Period_Con: {
    width: '100%',
    height: verticalScale(38),
    borderRadius: scale(5),
    borderWidth: scale(0.5),
    borderColor: COLOR.LIGHT_GREY,
    flexDirection: 'row',
  },
  leave_Period_Val_Con: {
    width: '90%',
    paddingLeft: scale(10),
    paddingRight: scale(5),
    height: '100%',
    justifyContent: 'center',
  },
  calendar_Con: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leavePeriod_Label: {
    color: COLOR.LIGHT_GREY,
  },
  leavePeriod_Selected_Label: {
    color: COLOR.BLACK,
  },
  calendar_Main: {
    borderWidth: scale(0.5),
    borderColor: COLOR.LIGHT_GREY,
    marginTop: scale(6),
    borderRadius: verticalScale(5),
  },
  theme: {
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: COLOR.PRIMARY,
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: COLOR.PRIMARY,
    dayTextColor: '#2d4150',
    textDisabledColor: COLOR.GREY,
    arrowColor: COLOR.PRIMARY,
    monthTextColor: COLOR.PRIMARY,
  },
});

export default dynamicStyles;
