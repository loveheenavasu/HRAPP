import {StyleSheet} from 'react-native';
import COLOR from '../../../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLOR.WHITE,
    width: '100%',
    maxHeight: verticalScale(500),
    marginVertical: verticalScale(3),
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
  outer_Con: {
    marginTop: verticalScale(2),
    marginBottom: verticalScale(5),
    width: '100%',
  },
  remark_outer_Con: {
    marginTop: verticalScale(3),
    marginBottom: verticalScale(5),
    width: '100%',
  },
  remark_Edit: {
    width: '100%',
    height: verticalScale(80),
    textAlignVertical: 'top',
  },
  flat_Con: {
    marginLeft: scale(1),
    paddingLeft: scale(5),
  },
  flat_MainChild: {
    width: '100%',
    height: verticalScale(45),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLOR.GREY,
    borderBottomWidth: scale(1),
    flexDirection: 'row',
  },
  flat_F_Child: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected_Person_Main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selected_ListMain: {
    borderWidth: scale(1),
    borderColor: COLOR.LIGHT_GREY,
    marginTop: verticalScale(4),
    marginRight: scale(5),
    borderRadius: scale(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected_Label: {
    fontSize: scale(12),
    marginVertical: scale(10),
    marginHorizontal: scale(6),
    color: COLOR.BLACK,
    opacity: 0.7,
  },
  btn: {
    width: scale(130),
    height: verticalScale(40),
    marginTop: scale(10),
    marginBottom: scale(5),
  },
});

export default styles;
