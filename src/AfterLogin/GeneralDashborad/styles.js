import {StyleSheet} from 'react-native'
import COLOR from '../../../Util/Color'
import { scale } from 'react-native-size-matters'

export default styles = StyleSheet.create({
main:{
    flex:1,
    backgroundColor:COLOR.GREY,
    paddingHorizontal:scale(7)
},
title:{
    fontSize:scale(21),
    fontWeight:'500',
    textAlign:'center'
}



})