import React, {FC} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import styles from './styles';

interface Props {
  currentMonth: string;
  leaveDate?: Object;
}

const CalenderList: FC<Props> = ({currentMonth, leaveDate}) => {
  return (
    <View style={styles.main}>
      <Calendar
        theme={styles.theme}
        disableArrowLeft={true}
        disableArrowRight={true}
        current={currentMonth}
        markingType={'period'}
        markedDates={leaveDate}
        enableSwipeMonths={false}
        renderArrow={() => {
          return null;
        }}
      />
    </View>
  );
};

export default CalenderList;
