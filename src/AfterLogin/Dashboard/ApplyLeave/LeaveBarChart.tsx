import React from 'react';
import {StyleSheet, View} from 'react-native';
import commonStyle from './commonStyle';
import Label from '../../../CommonComponent/Lable';
import {scale, verticalScale} from 'react-native-size-matters';
import {PieChart} from 'react-native-gifted-charts';
import COLOR from '../../../Util/Color';

const pieData = [
  {value: 16, color: COLOR.PRIMARY, text: '54%'},
  {value: 3.5, color: COLOR.NAVY, text: '30%'},
  {value: 3.5, color: COLOR.ORANGE, text: '16%'},
];

const detailsData = [
  {id: 1, color: COLOR.ORANGE, text: 'Pending'},
  {id: 2, color: COLOR.NAVY, text: 'Taken'},
  {id: 3, color: COLOR.GREEN, text: 'Balance'},
  {id: 4, color: COLOR.RED, text: 'Negative Balance'},
];

const leaveData = [
  {id: 1, title: 'Entitlement', txt: '28 days'},
  {id: 2, title: 'Balance As At 01/01/2023', txt: '0 days'},
  {id: 3, title: 'Earned Leave since 01/01/2023', txt: '9.33 days'},
  {id: 4, title: 'Adjustment', txt: '0 days'},
  {id: 5, title: 'Taken since 01/01/2023', txt: '4 days'},
  {id: 6, title: 'Leave Balance', txt: '5.5 days'},
  {id: 7, title: 'Balance fron previous year', txt: '0 days'},
  {id: 8, title: 'Pending', txt: '0 days'},
  {id: 9, title: 'Leave balance as 31/12/2023', txt: '24 days'},
];

const LeaveBarChat = () => {
  return (
    <View style={[commonStyle.main, styles.mainsub]}>
      <Label title="Annual" style={styles.title_Label} />
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
        {detailsData?.map((i, index) => {
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

const styles = StyleSheet.create({
  mainsub: {
    marginTop: verticalScale(3),
    maxHeight: '100%',
  },
  total_Leave_Label: {
    opacity: 0.5,
    color: COLOR.BLACK,
    fontSize: scale(12),
  },
  rect: {
    borderWidth: 1,
    height: 10,
    width: 10,
  },
  title_Label: {
    marginVertical: scale(5),
    marginLeft: scale(1),
  },
  pie_Chart_Con: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_Main: {
    width: '100%',
    height: verticalScale(42),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLOR.GREY,
    borderBottomWidth: scale(0.5),
    paddingHorizontal: scale(10),
  },
});
