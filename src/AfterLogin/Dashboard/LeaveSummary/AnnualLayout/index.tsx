import React from 'react';
import {View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {PieChart} from 'react-native-gifted-charts';
import {COLOR} from '@Util';
import {Label} from '@CommonComponent';
import styles from './styles';
import strings from '@src/Language/strings';

const pieData = [
  {value: 16, color: COLOR.PRIMARY, text: '54%'},
  {value: 3.5, color: COLOR.NAVY, text: '30%'},
];
const AnnualLeaveLayout = () => {
  return (
    <View style={styles.main}>
      <Label title={strings?.AnnualLeave} style={styles.title_Label} />
      <View style={styles.day_Con}>
        <Label title={`3.5 ${strings?.Days}`} style={styles.day_Label} />
        <Label title={strings?.Balance} style={styles.balance_Label} />
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
          labelsPosition="mid"
        />
      </View>
      <View style={styles.total_Leave_Con}>
        <Label title={strings?.TotalLeave} style={styles.total_Leave_Label} />
        <View style={styles.cir_Con} />
      </View>
      <View style={styles.bal_Con}>
        <Label title={strings?.BalanceLeave} style={styles.total_Leave_Label} />
        <View style={styles.bal_Cir_Con} />
      </View>
    </View>
  );
};

export default AnnualLeaveLayout;
