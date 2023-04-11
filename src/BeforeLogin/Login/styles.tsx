import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';

const styles = StyleSheet.create({
  main_Con: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  scroll: {
    paddingBottom: verticalScale(300),
  },
  logo_Con: {
    width: scale(200),
    height: scale(200),
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: scale(19),
    color: COLOR.BLACK,
  },
  main: {
    justifyContent: 'center',
    paddingHorizontal: scale(2),
    backgroundColor: COLOR.WHITE,
    width: '90%',
    marginHorizontal: '5%',
  },
  forgotTxtBox: {
    width: scale(130),
    alignSelf: 'flex-end',
    marginTop: verticalScale(2),
    marginBottom: verticalScale(20),
  },
  forgotTxt: {
    textAlign: 'right',
    color: COLOR.GREEN,
    fontSize: scale(12),
    textDecorationLine: 'underline',
  },
});

export default styles;
