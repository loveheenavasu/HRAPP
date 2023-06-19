import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';

const dynamicStyles = (selectedValue: string) =>
  StyleSheet.create({
    main: {
      width: '100%',
      maxHeight: verticalScale(500),
      marginTop: verticalScale(6),
      borderRadius: scale(6),
      paddingHorizontal: scale(10),
      backgroundColor: COLOR.WHITE,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      paddingBottom: scale(10),
    },
    dropDown_Main: {
      width: '100%',
      height: verticalScale(38),
      borderRadius: scale(5),
      borderWidth: scale(0.5),
      borderColor: COLOR.LIGHT_GREY,
      flexDirection: 'row',
    },
    value_Con: {
      width: '86%',
      height: '100%',
      paddingLeft: scale(10),
      paddingRight: scale(5),
      justifyContent: 'center',
    },
    icon_Con: {
      width: '14%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    selected_Label: {
      color: selectedValue ? COLOR.BLACK : COLOR.LIGHT_GREY,
      marginVertical: 0,
    },
    year_Value_Con: {
      width: '100%',
      borderBottomColor: COLOR.GREY,
      borderBottomWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLOR.WHITE,
    },
    year_Value_ConTwo: {
      width: '100%',
      borderBottomColor: COLOR.GREY,
      borderBottomWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLOR.GREY,
    },
    show_DropDown_Con: {
      borderWidth: scale(0.5),
      borderColor: COLOR.LIGHT_GREY,
      marginTop: verticalScale(5),
      borderRadius: scale(5),
      paddingHorizontal: scale(3),
      width: '100%',
    },
  });

export default dynamicStyles;
