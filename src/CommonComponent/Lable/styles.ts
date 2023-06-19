import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';

const styles = StyleSheet.create({
  main: {
    fontSize: scale(13),
    color: COLOR.BLACK,
    marginVertical: verticalScale(10),
  },
});

export default styles;
