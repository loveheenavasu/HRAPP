import React from 'react';
import {StyleSheet, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../../Util/Color';
import Label from '../../../CommonComponent/Lable';
import {PieChart} from 'react-native-gifted-charts';

const pieData = [
  {value: 20, color: COLOR.PRIMARY, text: '54%'},
  {value: 12, color: COLOR.NAVY, text: '12%'},
];
const HospitalizeLeaveLayout = () => {
  return (
    <View style={styles.main}>
      <Label title="Hospitalisation Leave" style={styles.title_Label} />
      <View style={styles.day_Con}>
        <Label title="12 Days" style={styles.day_Label} />
        <Label title="balance" style={styles.balance_Label} />
      </View>
      <View style={styles.chart_Con}>
        <PieChart
          strokeWidth={scale(0.5)}
          showText
          textColor={COLOR.WHITE}
          textBackgroundColor="white"
          textBackgroundRadius={22}
          data={pieData}
          fontStyle={'normal'}
          radius={scale(80)}
          labelsPosition='mid'
        />
      </View>
      <View style={styles.total_Leave_Con}>
        <Label title="Total Leave" style={styles.total_Leave_Label} />
        <View style={styles.cir_Con} />
      </View>
      <View style={styles.bal_Con}>
        <Label title="Balance Leave" style={styles.total_Leave_Label} />
        <View style={styles.bal_Cir_Con} />
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
  chart_Con: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  total_Leave_Con: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  total_Leave_Label: {
    marginVertical: 0,
    color: COLOR.BLACK,
    opacity: 0.7,
  },
  cir_Con: {
    width: scale(16),
    height: scale(16),
    backgroundColor: COLOR.PRIMARY,
    borderRadius: scale(8),
    marginLeft: scale(10),
  },
  bal_Con: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  bal_Cir_Con: {
    width: scale(16),
    height: scale(16),
    backgroundColor: COLOR.NAVY,
    borderRadius: scale(8),
    marginLeft: scale(10),
  },
});

export default HospitalizeLeaveLayout;
