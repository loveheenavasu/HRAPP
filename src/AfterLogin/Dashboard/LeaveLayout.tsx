import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Summary from 'react-native-vector-icons/Ionicons';
import Calender from 'react-native-vector-icons/AntDesign';
import Adjust from 'react-native-vector-icons/Feather';
import Label from '../../CommonComponent/Lable';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';
import {useNavigation} from '@react-navigation/native';

let mArray = ['Apply Leave', 'Leave Summary', 'Leave Adjustment'];

const LeaveLayout = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.main}>
      <View style={[styles.rowView, {justifyContent: 'space-around'}]}>
        {mArray.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.Leave_Menu_wrap}
              onPress={() =>
                navigation.navigate(
                  index === 0
                    ? 'ApplyLeave'
                    : index === 1
                    ? 'LeaveSummary'
                    : 'LeaveAdjustment',
                )
              }>
              {index === 0 ? (
                <Calender
                  name="calendar"
                  size={scale(21)}
                  style={{opacity: 0.6}}
                />
              ) : index === 1 ? (
                <Summary
                  name="document-text-outline"
                  size={scale(23)}
                  style={{opacity: 0.6}}
                />
              ) : (
                <Adjust name="edit" size={scale(20)} style={{opacity: 0.6}} />
              )}
              <Label title={item} style={styles.leaveTxt} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    maxHeight: verticalScale(500),
    marginVertical: verticalScale(3),
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
    paddingBottom: scale(10),
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: scale(5),
    marginVertical: verticalScale(5),
  },
  Leave_Menu_wrap: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },
  leaveTxt: {
    marginTop: verticalScale(3),
    marginBottom:0,
    color: COLOR.BLACK,
    opacity: 0.9,
    fontSize: scale(12),
  },
});

export default LeaveLayout;
