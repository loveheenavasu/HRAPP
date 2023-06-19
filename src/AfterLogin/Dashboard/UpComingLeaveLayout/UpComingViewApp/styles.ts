import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.GREY,
  },
  sub_main: {
    width: '96%',
    marginHorizontal: '2%',
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
    paddingVertical: scale(10),
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: scale(5),
    marginVertical: verticalScale(5),
    borderBottomColor: COLOR.GREY,
    borderBottomWidth: scale(0.5),
    paddingBottom: verticalScale(10),
  },
  date_Label: {
    marginVertical: verticalScale(1),
    fontSize: scale(11),
  },
  day_Label: {
    marginVertical: verticalScale(1),
    fontSize: scale(11),
    color: COLOR.BLACK,
    opacity: 0.4,
  },
  empty_Con: {
    width: '100%',
    height: verticalScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  not_Found_Label: {
    color: COLOR.BLACK,
    opacity: 0.5,
  },
  list_Sub_Child: {
    marginLeft: scale(10),
    justifyContent: 'center',
  },
});

export default styles;
