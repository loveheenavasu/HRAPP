import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../../../Util/Color';
import {Calendar} from 'react-native-calendars';

interface Props {
  currentMonth: string;
}

const CalenderYearlyLayout = ({currentMonth}: Props) => {
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
  theme: {
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: COLOR.PRIMARY,
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: COLOR.GREY,
    arrowColor: COLOR.PRIMARY,
    monthTextColor: COLOR.PRIMARY,
  },
});

export default React.memo(CalenderYearlyLayout);
