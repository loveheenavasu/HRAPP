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
    paddingBottom: verticalScale(10),
  },
  title_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(15),
    opacity: 0.8,
  },
  subTitle_Label: {
    fontSize: scale(12),
    textAlign: 'center',
    fontWeight: '600',
  },
  rowView2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: scale(5),
    marginVertical: verticalScale(5),
  },
  rowViewHand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: scale(5),
    marginVertical: verticalScale(5),
    width: '40%',
    alignSelf: 'center',
  },
  hLine: {
    height: scale(1),
    width: '95%',
    backgroundColor: COLOR.GREY,
    alignSelf: 'center',
    marginTop: verticalScale(2),
  },
  chatTxt: {
    marginLeft: scale(7),
  },
});

export default styles;
