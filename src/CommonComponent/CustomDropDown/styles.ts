import { COLOR } from "@Util";
import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const styles = (
    selected: string,
    dropdownWidth: number,
    dropdownTop: number,
    dropdownLeft: number,
  ) =>
    StyleSheet.create({
      main: {
        width: '100%',
        height: verticalScale(40),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(10),
        borderColor: COLOR.LIGHT_GREY,
        borderWidth: scale(0.5),
        borderRadius: scale(5),
      },
      overLay_Con: {
        height: '100%',
        width: '100%',
      },
      label: {
        fontSize: 14,
        color: '#000',
      },
      dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: {height: 4, width: 0},
        shadowOpacity: 0.5,
        minHeight: verticalScale(40),
        justifyContent: 'center',
        width: dropdownWidth,
        top: dropdownTop,
        left: dropdownLeft,
        elevation: 7,
      },
      list_Con: {
        width: '100%',
        height: verticalScale(40),
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomWidth: scale(0.5),
        borderBottomColor: COLOR.LIGHT_GREY,
        paddingHorizontal: scale(10),
      },
      title_Lable: {
        color: selected ? COLOR.BLACK : COLOR.LIGHT_GREY,
        opacity: selected ? 0.8 : 1,
        maxWidth: '80%',
        marginVertical: 0,
      },
      list_Label: {
        marginVertical: 0,
        paddingLeft: scale(5),
      },
    });

    export default styles;