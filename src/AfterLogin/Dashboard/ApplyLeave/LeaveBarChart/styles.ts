import {COLOR} from '@Util';
import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainsub: {
    marginTop: verticalScale(3),
    maxHeight: '100%',
  },
  total_Leave_Label: {
    opacity: 0.5,
    color: COLOR.BLACK,
    fontSize: scale(12),
  },
  rect: {
    borderWidth: 1,
    height: 10,
    width: 10,
  },
  title_Label: {
    marginVertical: scale(5),
    marginLeft: scale(1),
  },
  pie_Chart_Con: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_Main: {
    width: '100%',
    height: verticalScale(42),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLOR.GREY,
    borderBottomWidth: scale(0.5),
    paddingHorizontal: scale(10),
  },
});

export default styles;
