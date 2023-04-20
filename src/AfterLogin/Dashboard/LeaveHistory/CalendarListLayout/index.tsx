import React from 'react';
import {StyleSheet, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../../../Util/Color';
import {Calendar} from 'react-native-calendars';

interface Props {
  currentMonth: string;
  leaveDate?: Object;
}

const CalenderList = ({currentMonth, leaveDate}: Props) => {
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

export default CalenderList;
