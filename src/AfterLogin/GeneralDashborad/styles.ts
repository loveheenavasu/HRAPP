import {COLOR} from '@Util';
import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content_Con: {
    paddingBottom: verticalScale(100),
    flexGrow: 1,
  },
  sub_Main: {
    width: '94%',
    marginHorizontal: '3%',
  },
  scroll_Con: {
    backgroundColor: COLOR.GREY,
    flex: 1,
  },
});

export default styles;
