import {StyleSheet}  from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import {COLOR}  from "@Util";

const styles = StyleSheet.create({
    main: {
      width: '100%',
      maxHeight: verticalScale(500),
      marginVertical: verticalScale(3),
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
    title_Label: {
      color: COLOR.NAVY,
      fontWeight: 'bold',
      fontSize: scale(15),
      opacity: 0.8,
    },
    header_Con: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    s_Title: {
      fontSize: scale(12),
      fontWeight: '500',
      color: COLOR.NAVY,
    },
    viewAll_Label: {
      color: COLOR.NAVY,
      fontWeight: 'bold',
      fontSize: scale(11),
      opacity: 0.8,
    },
    rowView: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: scale(5),
      marginVertical: verticalScale(5),
      borderBottomColor: COLOR.GREY,
      borderBottomWidth: scale(0.5),
      paddingBottom: verticalScale(10),
    },
    coloumView: {
      paddingLeft: scale(11),
    },
    date_Label: {
      marginVertical: verticalScale(1),
      fontSize: scale(11),
    },
    day_Label: {
      marginVertical: verticalScale(1),
      fontSize: scale(11),
      color: COLOR.BLACK,
      opacity: 0.4,
    },
    list_Sub_Child: {
      marginLeft: scale(10),
      justifyContent: 'center',
    },
  });

  export default styles;