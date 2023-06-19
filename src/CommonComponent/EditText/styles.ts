import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';

const styles = StyleSheet.create({
  main: {
    height: verticalScale(40),
    fontSize: scale(13),
    flex: 1,
    color: COLOR.BLACK,
  },
  inputBox: {
    flexDirection: 'row',
    paddingHorizontal: '2%',
    borderWidth: scale(0.6),
    marginTop: verticalScale(20),
    width: '98%',
    alignSelf: 'center',
    borderRadius: 7,
    borderColor: COLOR.BLACK,
    fontSize: scale(17),
  },
  imgBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(6),
  },
  eyeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(4),
  },
});

export default styles;
