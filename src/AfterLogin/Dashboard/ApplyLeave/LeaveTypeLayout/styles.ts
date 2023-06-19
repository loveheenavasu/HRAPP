import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLOR.WHITE,
    width: '100%',
    maxHeight: verticalScale(500),
    marginTop: verticalScale(6),
    marginBottom: verticalScale(3),
    borderRadius: scale(6),
    paddingHorizontal: scale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    paddingBottom: scale(10),
    paddingTop: scale(2),
  },
  title_Label: {
    marginVertical: scale(5),
    marginLeft: scale(1),
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLOR.GREY,
    borderBottomWidth: 1,
    paddingBottom: scale(10),
  },
  annual_Levae_Con: {
    width: '50%',
  },
  annual_Bal_Con: {
    width: '50%',
    height: scale(68),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: scale(10),
  },
  annual_Bal_Label: {
    marginVertical: 0,
    marginTop: scale(20),
    color: COLOR.BLACK,
    opacity: 0.7,
  },
  annual_Bal_Value: {
    marginVertical: 0,
    color: COLOR.PRIMARY,
    opacity: 0.8,
  },
});
export default styles;
