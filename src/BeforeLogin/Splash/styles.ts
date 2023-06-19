import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    fontSize: scale(17),
    color: COLOR.PRIMARY,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: verticalScale(40),
  },
  button_Con: {
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: verticalScale(30),
  },
});

export default styles;
