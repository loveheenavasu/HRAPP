import { COLOR } from "@Util";
import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const styles = StyleSheet.create({
    toast_Con: {
      width: '90%',
      marginHorizontal: '5%',
      height: verticalScale(60),
      backgroundColor: COLOR.PRIMARY,
      zIndex: 99999,
      borderRadius: scale(10),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      position: 'absolute',
      top: 0,
    },
    toastRow: {
      width: '90%',
      height: '100%',
      marginHorizontal: '5%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    toastText: {
      width: '70%',
      padding: 2,
    },
    title: {
      fontWeight: 'bold',
      marginVertical: scale(2),
      color: COLOR.WHITE,
      opacity: 0.8,
    },
    msg_Label: {
      marginVertical: 0,
      color: COLOR.WHITE,
    },
  });


  export default styles;