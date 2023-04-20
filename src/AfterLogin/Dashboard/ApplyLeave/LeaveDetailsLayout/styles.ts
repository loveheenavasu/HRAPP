import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../../../Util/Color';

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLOR.WHITE,
    width: '100%',
    maxHeight: verticalScale(500),
    marginVertical: verticalScale(3),
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
  list_Main: {
    width: '100%',
    minHeight: verticalScale(45),
    flexDirection: 'row',
    borderBottomColor: COLOR.GREY,
    borderBottomWidth: scale(0.6),
  },
  list_Date_Con: {
    width: '35%',
    alignItems: 'flex-start',
    marginTop: verticalScale(18),
  },
  date_Label: {
    marginVertical: 0,
    color: COLOR.BLACK,
    opacity: 0.8,
  },
  delete_Con: {
    width: '10%',
    alignItems: 'flex-end',
    marginTop: verticalScale(16),
  },
  full_Day_Con: {
    width: '20%',
    alignItems: 'flex-end',
    marginTop: verticalScale(18),
  },
  drop_Con: {
    width: '35%',
    marginVertical: verticalScale(10),
  },
  warning_Txt: {
    fontSize: scale(10),
    marginTop: verticalScale(3),
    marginBottom: 0,
  },
  first_Child_Con: {
    width: '75%',
  },
  second_Child_Con: {
    width: '25%',
  },
});

export default styles;
