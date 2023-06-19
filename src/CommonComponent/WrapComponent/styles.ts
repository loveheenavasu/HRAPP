import {StyleSheet} from 'react-native';
import {COLOR} from '@Util';
import {verticalScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  scroll: {
    flexGrow: 1,
    paddingBottom: verticalScale(80),
  },
});

export default styles;
