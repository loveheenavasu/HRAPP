import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: scale(19),
    color: COLOR.BLACK,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(2),
    backgroundColor: COLOR.WHITE,
  },
  forgotTxtBox: {
    marginBottom: verticalScale(12),
  },
  forgotTxt: {
    textAlign: 'right',
    color: COLOR.GREEN,
    marginTop: verticalScale(2),
    marginRight: scale(3),
  },
});

export default styles;
