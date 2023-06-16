import {StyleSheet} from 'react-native';
import {verticalScale, scale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: verticalScale(45),
    backgroundColor: COLOR.WHITE,
    flexDirection: 'row',
    borderBottomColor: COLOR.LIGHT_GREY,
    borderBottomWidth: scale(0.6),
  },
  first_Child: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  second_Child: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '15%',
  },
  title_Label: {
    fontWeight: '700',
    opacity: 0.7,
  },
});

export default styles;
