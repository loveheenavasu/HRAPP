import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    maxHeight: verticalScale(500),
    marginVertical: verticalScale(3),
    borderRadius: scale(6),
    paddingHorizontal: scale(10),
    backgroundColor: COLOR.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    paddingBottom: scale(10),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(5),
    marginVertical: verticalScale(5),
    justifyContent: 'space-around',
  },
  Leave_Menu_wrap: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },
  leaveTxt: {
    marginTop: verticalScale(3),
    marginBottom: 0,
    color: COLOR.BLACK,
    opacity: 0.9,
    fontSize: scale(12),
  },
  icon: {
    opacity: 0.6,
  },
});

export default styles;
