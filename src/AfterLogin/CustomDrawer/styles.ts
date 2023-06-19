import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.WHITE,
  },
  profile_Icon_Con: {
    width: scale(90),
    height: scale(90),
    borderRadius: scale(45),
    backgroundColor: COLOR.PRIMARY,
    alignSelf: 'center',
    marginTop: verticalScale(30),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout_Con: {
    width: '100%',
    position: 'absolute',
    bottom: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout_Label: {
    fontWeight: '700',
  },
  name_Label: {
    alignSelf: 'center',
    fontSize: scale(14),
    marginTop: verticalScale(20),
  },
  short_Name_Label: {
    alignSelf: 'center',
    fontSize: scale(24),
    color: COLOR.WHITE,
    letterSpacing: 4,
  },
  circle_Con: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    backgroundColor: COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leave_circle_Con: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    backgroundColor: COLOR.RED,
    justifyContent: 'center',
    alignItems: 'center',
  },
  first_Child: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    marginTop: verticalScale(30),
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopColor: COLOR.LIGHT_GREY,
    borderBottomColor: COLOR.LIGHT_GREY,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: verticalScale(50),
  },
  second_Child: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopColor: COLOR.LIGHT_GREY,
    borderBottomColor: COLOR.LIGHT_GREY,
    borderBottomWidth: 1,
    height: verticalScale(50),
  },
  home_Label: {
    marginLeft: scale(20),
    fontWeight: 'normal',
  },
});

export default styles;
