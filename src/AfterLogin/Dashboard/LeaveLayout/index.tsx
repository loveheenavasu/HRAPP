import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Summary from 'react-native-vector-icons/Ionicons';
import Calender from 'react-native-vector-icons/AntDesign';
import Adjust from 'react-native-vector-icons/Feather';
import {scale} from 'react-native-size-matters';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Label} from '@CommonComponent';
import styles from './styles';

let mArray = ['Apply Leave', 'Leave Summary', 'Leave Adjustment'];

interface navigationProps {
  ApplyLeave: undefined;
  LeaveSummary: undefined;
  LeaveAdjustment: undefined;
}

const LeaveLayout: FC = () => {
  const navigation = useNavigation<NavigationProp<navigationProps>>();
  return (
    <View style={styles.main}>
      <View style={styles.rowView}>
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
                  style={styles.icon}
                />
              ) : index === 1 ? (
                <Summary
                  name="document-text-outline"
                  size={scale(23)}
                  style={styles.icon}
                />
              ) : (
                <Adjust name="edit" size={scale(20)} style={styles.icon} />
              )}
              <Label title={item} style={styles.leaveTxt} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default LeaveLayout;
