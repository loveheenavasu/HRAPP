import React, {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
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

const _showLeaveData = ({item}: any) => {
  const {title, txt} = item;
  return (
    <View style={[commonStyle.rowView, {paddingBottom: scale(4)}]}>
      <Label title={title} style={styles.total_Leave_Label} />
      <Label title={txt} style={styles.total_Leave_Label} />
    </View>
  );
};

const LeaveBarChat: FC = () => {
  return (
    <View style={commonStyle.main}>
      <Label title="Annual" style={commonStyle.headingTxt} />
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

      <FlatList
        data={leaveData}
        keyExtractor={item => item?.id.toString()}
        renderItem={_showLeaveData}
        style={styles.list}
      />
    </View>
  );
};
const styles = StyleSheet.create({
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
    marginVertical: 2,
    // color: COLOR.BLACK,
    opacity: 0.7,
    // marginLeft: scale(2)
    marginHorizontal: scale(3),
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
    // marginLeft: scale(10),
  },
  rect: {
    borderWidth: 1,
    height: 10,
    width: 10,
  },
  list: {
    // backgroundColor:'red',
    // marginTop:verticalScale(3)
  },
});
export default LeaveBarChat;
