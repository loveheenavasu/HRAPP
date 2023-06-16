import {StyleSheet} from 'react-native';
import COLOR from '../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR.GREY,
  },
  title: {
    fontSize: scale(21),
    fontWeight: '500',
    color: COLOR.NAVY,
  },
  normalTitle: {
    fontSize: scale(12),
    fontWeight: '500',
    color: COLOR.NAVY,
  },
  scroll: {
    paddingBottom: verticalScale(100),
    paddingHorizontal: scale(10),
  },
});

export default styles;
