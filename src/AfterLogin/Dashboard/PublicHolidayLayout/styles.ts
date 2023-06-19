import {StyleSheet} from 'react-native';
import {verticalScale, scale} from 'react-native-size-matters';
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
  title_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(15),
    opacity: 0.8,
  },
  header_Con: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  s_Title: {
    fontSize: scale(12),
    fontWeight: '500',
    color: COLOR.NAVY,
  },
  pubHolTxt: {
    marginVertical: verticalScale(1),
    fontSize: scale(28),
    marginLeft: scale(4),
    color: COLOR.ORANGE,
  },
  normalTxt: {
    marginVertical: verticalScale(1),
    fontSize: scale(11),
    marginLeft: scale(4),
    color: COLOR.BLACK,
    opacity: 0.4,
  },
  btn: {
    width: scale(150),
    height: scale(35),
    marginTop: verticalScale(20),
  },
});

export default styles;
