import React, {FC} from 'react';
import {View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {PieChart} from 'react-native-gifted-charts';
import strings from '@src/Language/strings';
import {Label} from '@CommonComponent';
import {COLOR} from '@Util';
import styles from './styles';
import commonStyle from '../commonStyle';

const pieData = [
  {value: 16, color: COLOR.PRIMARY, text: '54%'},
  {value: 3.5, color: COLOR.NAVY, text: '30%'},
  {value: 3.5, color: COLOR.ORANGE, text: '16%'},
];

const detailsData = [
  {id: 1, color: COLOR.ORANGE, text: strings?.Pending},
  {id: 2, color: COLOR.NAVY, text: strings?.Taken},
  {id: 3, color: COLOR.GREEN, text: strings?.Balance},
  {id: 4, color: COLOR.RED, text: strings?.NegativeBalance},
];

const leaveData = [
  {id: 1, title: strings?.Entitlement, txt: `28${strings?.Days}`},
  {id: 2, title: `${strings?.BalanceAs}01/01/2023`, txt: `0 ${strings?.Days} `},
  {
    id: 3,
    title: `${strings?.EarnedLeave_Since} 01/01/2023`,
    txt: `3.3 ${strings?.Days} `,
  },
  {id: 4, title: `${strings?.Adjustment}`, txt: `0${strings?.Days}`},
  {id: 5, title: `${strings?.TakenSince}01/01/2023`, txt: `4${strings?.Days}`},
  {id: 6, title: `${strings?.LeaveBalance}`, txt: `5.5${strings?.Days}`},
  {id: 7, title: `${strings?.BalancePrevious_Year}`, txt: `0${strings?.Days}`},
  {id: 8, title: `${strings?.Pending}`, txt: `0${strings?.Day}`},
  {
    id: 9,
    title: `${strings?.LeaveBalance}31/12/2023`,
    txt: `24 ${strings?.Days}`,
  },
];

const LeaveBarChat: FC = () => {
  return (
    <View style={[commonStyle.main, styles.mainsub]}>
      <Label title={strings?.Annual} style={styles.title_Label} />
      <View style={styles.pie_Chart_Con}>
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
      <View style={commonStyle.rowView}>
        {detailsData?.map(i => {
          return (
            <>
              <View style={[styles.rect, {backgroundColor: i?.color}]}></View>
              <Label title={i.text} style={styles.total_Leave_Label} />
            </>
          );
        })}
      </View>
      {leaveData?.map((item, index) => (
        <View key={index} style={styles.list_Main}>
          <Label title={item?.title} style={styles.total_Leave_Label} />
          <Label title={item?.txt} style={styles.total_Leave_Label} />
        </View>
      ))}
    </View>
  );
};

export default LeaveBarChat;