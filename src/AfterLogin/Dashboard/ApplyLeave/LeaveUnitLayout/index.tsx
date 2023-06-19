import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Calender from 'react-native-vector-icons/AntDesign';
import {Calendar as ViewCalendar} from 'react-native-calendars';
import {COLOR} from '@Util';
import {Label, CustomDropdown} from '@CommonComponent';
import styles from './styles';
import strings from '@src/Language/strings';

interface Props {
  showLeaveUnit?: boolean;
  onClickLeaveUnit?: () => void;
  onClickUnit: (item: any) => void;
  selectedUnit: string;
  showLeaveCalendar?: boolean;
  onClickLeavePeriod?: () => void;
  onClickCalendar?: (item: any) => void;
  leaveJson?: Object | {};
  leavePeriodArray?: Object[];
}

const LeaveUnitLayout: FC<Props> = ({
  onClickUnit,
  showLeaveCalendar,
  onClickLeavePeriod,
  onClickCalendar,
  leaveJson,
  leavePeriodArray,
}) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  return (
    <View style={styles.main}>
      <CustomDropdown
        title={strings?.LeaveUnit}
        onClick={item => onClickUnit(item)}
        placeHolder={strings?.SelectLeaveUnit}
        data={[
          {id: 0, value: strings?.Days},
          {id: 1, value: strings?.Weeks},
        ]}
      />
      <Label title={strings?.LeavePeriod} style={styles.leave_Title} />
      <TouchableOpacity
        style={styles.leave_Period_Con}
        onPress={onClickLeavePeriod}
        activeOpacity={0.7}>
        <View style={styles.leave_Period_Val_Con}>
          <Label
            style={
              leavePeriodArray?.length > 0
                ? styles.leavePeriod_Selected_Label
                : styles.leavePeriod_Label
            }
            title={
              leavePeriodArray?.length > 0
                ? strings?.LeavePeriodis +
                  leavePeriodArray?.length.toString() +
                  (leavePeriodArray?.length > 1 ? strings?.Days : strings?.Day)
                : strings?.SelectLeavePeriod
            }
          />
        </View>
        <View style={styles.calendar_Con}>
          <Calender name="calendar" size={scale(17)} color={COLOR.LIGHT_GREY} />
        </View>
      </TouchableOpacity>
      {showLeaveCalendar && (
        <ViewCalendar
          style={styles.calendar_Main}
          current={currentDate}
          minDate={currentDate}
          onDayPress={onClickCalendar}
          markedDates={leaveJson}
          theme={styles.theme}
        />
      )}
    </View>
  );
};
export default React.memo(LeaveUnitLayout);
