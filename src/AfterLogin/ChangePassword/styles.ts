import {StyleSheet} from 'react-native';
import COLOR from '../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: COLOR.WHITE},
  title_Label: {
    color: COLOR.BLACK,
    opacity: 0.7,
    marginLeft: scale(2),
  },
  sub_Main: {
    paddingBottom: verticalScale(100),
    width: '90%',
    marginHorizontal: '5%',
    marginTop: verticalScale(50),
  },
  edit_Con: {
    marginTop: 0,
    borderWidth: scale(0.3),
  },
  button_Con: {
    height: verticalScale(40),
    marginTop: verticalScale(30),
    marginBottom: verticalScale(20),
  },
  delete_Con: {
    width: scale(100),
    alignSelf: 'center',
  },
  delete_Label: {
    color: COLOR.RED,
    alignSelf: 'center',
  },
});

export default styles;
