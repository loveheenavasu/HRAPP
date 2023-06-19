import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  dropBtn: {
    borderRadius: scale(5),
    width: '95%',
    height: '10%',
    marginTop: verticalScale(7),
    marginBottom: verticalScale(7),
  },
  dropBtnTxt: {
    fontSize: scale(12),
  },
});

export default styles;
