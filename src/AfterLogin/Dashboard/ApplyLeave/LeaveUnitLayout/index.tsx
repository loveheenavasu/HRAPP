import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import COLOR from '../../../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';
import DropDown from '../../../../CommonComponent/DropDown';
import Label from '../../../../CommonComponent/Lable';
import Calender from 'react-native-vector-icons/AntDesign';
import {Calendar as ViewCalendar} from 'react-native-calendars';

interface Props {
  showLeaveUnit?: boolean;
  onClickLeaveUnit?: () => void;
  onClickUnit?: (item: any) => void;
  selectedUnit: string;
  selectedLeaveRange?: string;
  showLeaveCalendar?: boolean;
  onClickLeavePeriod?: () => void;
}

const LeaveUnitLayout = ({
  showLeaveUnit,
  onClickLeaveUnit,
  onClickUnit,
  selectedUnit,
  selectedLeaveRange,
  showLeaveCalendar,
  onClickLeavePeriod,
}: Props) => {
  const styles = useMemo(
    () => dynamicStyles(selectedLeaveRange),
    [selectedLeaveRange],
  );
  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <View style={styles.main}>
      <DropDown
        title="Leave Unit"
        onClickValue={item => onClickUnit(item)}
        placeHolder="Please select Leave Unit"
        onClick={onClickLeaveUnit}
        selectedValue={selectedUnit}
        titleStyle={styles.title_Label}
        list={[
          {id: 0, value: 'Days', selected: false},
          {id: 1, value: 'Weeks', selected: false},
        ]}
        showDropdown={showLeaveUnit}
      />
      <Label title="Leave Period" style={styles.leave_Title} />
      <TouchableOpacity
        style={styles.leave_Period_Con}
        onPress={onClickLeavePeriod}>
        <View style={styles.leave_Period_Val_Con}>
          <Label
            style={styles.leavePeriod_Label}
            title="Please select leave Period "
          />
        </View>
        <View style={styles.calendar_Con}>
          <Calender name="calendar" size={scale(17)} color={COLOR.LIGHT_GREY} />
        </View>
      </TouchableOpacity>

      {showLeaveCalendar && (
        <ViewCalendar
          style={{
            borderWidth: scale(0.5),
            borderColor: COLOR.LIGHT_GREY,
            marginTop: scale(6),
            marginBottom: scale(20),
            borderRadius: verticalScale(5),
          }}
          current={currentDate}
          minDate={currentDate}
        />
      )}
    </View>
  );
};

const dynamicStyles = (props: any) =>
  StyleSheet.create({
    main: {
      backgroundColor: COLOR.WHITE,
      width: '100%',
      maxHeight: verticalScale(500),
      marginVertical: verticalScale(3),
      borderRadius: scale(6),
      paddingHorizontal: scale(10),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      elevation: 9,
      paddingBottom: scale(10),
      paddingTop: scale(2),
    },
    title_Label: {
      marginVertical: scale(5),
      marginLeft: scale(1),
    },
    leave_Title: {
      marginVertical: scale(8),
      marginLeft: scale(1),
    },
    leave_Period_Con: {
      width: '100%',
      height: verticalScale(38),
      borderRadius: scale(5),
      borderWidth: scale(0.5),
      borderColor: COLOR.LIGHT_GREY,
      flexDirection: 'row',
    },
    leave_Period_Val_Con: {
      width: '90%',
      paddingLeft: scale(10),
      paddingRight: scale(5),
      height: '100%',
      justifyContent: 'center',
    },
    calendar_Con: {
      width: '10%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    leavePeriod_Label: {
      color: props ? COLOR.BLACK : COLOR.LIGHT_GREY,
    },
  });

export default LeaveUnitLayout;
