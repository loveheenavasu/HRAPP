import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { COLOR } from "@Util";

const styles = StyleSheet.create({
    main: {
      width: '100%',
      maxHeight: verticalScale(600),
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
    },
    sub_Main: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title_Label: {
      color: COLOR.NAVY,
      fontWeight: 'bold',
      fontSize: scale(15),
      opacity: 0.8,
      alignSelf: 'center',
    },
    viewAll_Label: {
      color: COLOR.NAVY,
      fontWeight: 'bold',
      fontSize: scale(11),
      opacity: 0.8,
      
    },
    attachImg: {
      alignSelf: 'center',
    },
    leaveTxt: {
      fontSize: scale(12),
      textAlign: 'center',
      fontWeight: '600',
    },
    rowView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: verticalScale(5),
      width: '90%',
      marginHorizontal: '5%',
    },
    add_Button: {
      backgroundColor: COLOR.NAVY,
      flexDirection: 'row',
      width: scale(80),
      justifyContent: 'center',
      alignItems: 'center',
      height: verticalScale(30),
      padding: 0,
    },
    edit_Button: {
      backgroundColor: COLOR.NAVY,
      width: scale(80),
      padding: verticalScale(7),
    },
  });
  export default styles;