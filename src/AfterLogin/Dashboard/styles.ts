import { StyleSheet } from "react-native";
import COLOR from "../../Util/Color";
import { scale, verticalScale } from "react-native-size-matters";


export default styles = StyleSheet.create({
   main:{
    flex:1,
    backgroundColor:COLOR.GREY,
   //  paddingHorizontal:verticalScale(7)
   },
   title:{
    fontSize:scale(21),
    fontWeight:'500',
    color:COLOR.NAVY,
   //  textAlign:'center'
   },
   normalTitle:{
    fontSize:scale(12),
    fontWeight:'500',
    color:COLOR.NAVY,
    // textAlign:'center'
   }
})