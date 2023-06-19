import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {COLOR} from '@Util';
import styles from './styles';

interface Props {
  currentMonth: string;
}

const CalenderYearlyLayout: FC<Props> = ({currentMonth}) => {
  const [selected, setSelected] = useState('');
  let mCurrentDateArray = currentMonth?.split('-');
  let maxYear = mCurrentDateArray[0];
  let maxDate = maxYear + '-12' + '-31';
  let minDate = maxYear + '-01' + '-1';

  return (
    <View style={styles.main}>
      <Calendar
        theme={styles.theme}
        disableArrowLeft={false}
        disableArrowRight={false}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        current={currentMonth}
        maxDate={maxDate}
        minDate={minDate}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: COLOR.PRIMARY,
          },
        }}
        enableSwipeMonths={true}
      />
    </View>
  );
};

export default React.memo(CalenderYearlyLayout);
