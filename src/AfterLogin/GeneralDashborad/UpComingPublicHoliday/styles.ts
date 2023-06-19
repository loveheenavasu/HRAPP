import {COLOR} from '@Util';
import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    maxHeight: verticalScale(600),
    marginTop: verticalScale(6),
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
  },
  title_Con: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(15),
    opacity: 0.8,
  },
  list_Con: {
    width: '100%',
  },
  viewAll_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(11),
    opacity: 0.8,
  },
  empty_Con: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  not_Found_Label: {
    color: COLOR.BLACK,
    opacity: 0.6,
  },
  list_Main: {
    width: '100%',
  },
  f_Child: {
    flexDirection: 'row',
    marginBottom: verticalScale(10),
  },
  holiday_Con: {
    width: '100%',
    marginLeft: scale(10),
  },
  holiday_Label: {
    fontSize: scale(12),
    marginVertical: 0,
  },
  date_Label: {
    fontSize: scale(10),
    marginTop: scale(2),
    marginBottom: 0,
    color: COLOR.BLACK,
    opacity: 0.4,
  },
});

export default styles;
