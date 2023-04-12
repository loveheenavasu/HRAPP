import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';

export default styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR.GREY,
  },
  title: {
    fontSize: scale(21),
    fontWeight: '500',
    textAlign: 'center',
  },
});