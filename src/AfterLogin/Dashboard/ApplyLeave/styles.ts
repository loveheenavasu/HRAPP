import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  sub_Main: {
    backgroundColor: COLOR.GREY,
    flex: 1,
  },
  content_Con: {
    paddingBottom: verticalScale(100),
  },
  main_Child: {
    width: '96%',
    height: '100%',
    marginHorizontal: '2%',
  },
});

export default styles;
