import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  sub_Main: {
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: scale(10),
    padding: scale(10),
    backgroundColor: COLOR.WHITE,
    marginTop: verticalScale(200),
  },
  second_main: {
    flex: 1,
  },
  title_Label: {
    marginVertical: 0,
    marginLeft: scale(4),
  },
  button_Con: {
    height: verticalScale(40),
    width: '99%',
    marginHorizontal: '.5%',
    marginTop: verticalScale(10),
  },
  circle_Con: {
    position: 'absolute',
    top: scale(-10),
    height: scale(40),
    width: scale(40),
    borderRadius: scale(20),
    backgroundColor: COLOR.PRIMARY,
    right: scale(-10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
