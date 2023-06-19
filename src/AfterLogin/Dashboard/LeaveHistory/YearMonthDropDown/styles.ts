import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { COLOR } from "@Util";

const DynaimicStyles = (selectedMonth: any) =>
  StyleSheet.create({
    main: {
      width: '100%',
      maxHeight: verticalScale(500),
      marginVertical: verticalScale(3),
      borderRadius: scale(6),
      paddingHorizontal: scale(8),
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
    month_Title: {
      marginBottom: 0,
      marginLeft: scale(5),
    },
    month_List_Con: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: scale(10),
    },
    month_List_Back: (item: any) => ({
      width: scale(78.5),
      height: scale(86),
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: COLOR.GREY,
      borderWidth: scale(0.5),
      backgroundColor:
        selectedMonth === item?.value ? COLOR.PRIMARY : COLOR.WHITE,
    }),
    monthName_Label: (item: any) => ({
      color: item?.value === selectedMonth ? COLOR.WHITE : COLOR.BLACK,
    }),
    calebder_Btn_Con: {
      width: '100%',
      height: verticalScale(40),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(10),
    },
    cancel_Btn_Con: {
      width: scale(100),
      height: verticalScale(40),
      backgroundColor: COLOR.NAVY,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(5),
    },
    cancel_Label: {
      color: COLOR.WHITE,
      marginVertical: 0,
    },
    calender_Apply_Button: {
      width: scale(100),
      height: verticalScale(40),
      backgroundColor: COLOR.PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(5),
    },
  });

  export default DynaimicStyles;