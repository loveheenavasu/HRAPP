import React from 'react';
import {StyleSheet, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../../Util/Color';
import Label from '../../../CommonComponent/Lable';

const AnnualLeaveLayout = () => {
  return (
    <View style={styles.main}>
      <Label title="Annual Leave" style={styles.title_Label} />
      <View style={styles.day_Con}>
        <Label title="3.5 Days" style={styles.day_Label} />
        <Label title="balance" style={styles.balance_Label} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    maxHeight: verticalScale(500),
    marginTop: verticalScale(6),
    borderRadius: scale(6),
    paddingHorizontal: scale(10),
    backgroundColor: COLOR.WHITE,
    shadowColor: COLOR.BLACK,
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
    color: COLOR.BLACK,
    fontWeight: 'bold',
    opacity: 0.65,
  },
  day_Con: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  day_Label: {
    color: COLOR.GREEN,
    fontSize: scale(20),
    marginVertical: 0,
  },
  balance_Label: {
    marginTop: verticalScale(5),
    marginBottom: 0,
    marginLeft: scale(5),
    color: COLOR.BLACK,
    opacity: 0.7,
  },
});

export default AnnualLeaveLayout;
