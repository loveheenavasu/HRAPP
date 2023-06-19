import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    maxHeight: verticalScale(500),
    marginBottom: verticalScale(3),
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
    paddingBottom: scale(10),
  },
  title_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(15),
    opacity: 0.8,
  },
  f_Child: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  personal_Staff_Con: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },
  personal_Con: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  staff_Con: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  personal_Label: {
    marginVertical: 0,
    color: COLOR.BLACK,
    opacity: 0.9,
  },
  yearly_Month_Con: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: verticalScale(10),
    alignItems: 'center',
  },
  yearly_Con: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthly_Con: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  monthly_Icon: {
    marginLeft: scale(14),
  },
  yearly_Icon: {
    marginLeft: scale(26),
  },
});

export default styles;
