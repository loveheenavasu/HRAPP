import {COLOR} from '@Util';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: COLOR.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  txt: {
    color: COLOR.WHITE,
    fontSize: scale(14),
  },
});

export default styles;
