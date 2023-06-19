import React, {FC, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Label, DropDown} from '@CommonComponent';
import styles from './styles';
import strings from '@src/Language/strings';

let leaveArray = [
  {id: 0, value: strings?.FullDay},
  {id: 1, value: strings?.HalfDay},
];

interface Props {
  list?: string[];
  deleteLeave?: (item: any) => void;
  clickLeaveFullHalf?: (item: any) => void;
  selectedLeaveType?: any[];
}

const LeaveDetailsLayout: FC<Props> = ({
  list,
  deleteLeave,
  clickLeaveFullHalf,
  selectedLeaveType,
}) => {
  const [showDropdown, setShowDropdown] = useState(
    Array(list?.length).fill(false),
  );
  const items = list?.map((value, index) => {
    return (
      <View style={styles.list_Main} key={index}>
        <View style={styles.list_Date_Con}>
          <Label style={styles.date_Label} title={value} />
        </View>
        <View style={styles.drop_Con}>
          <DropDown
            selectedValue={selectedLeaveType[index]}
            title=""
            onClickValue={item => {
              clickLeaveFullHalf({
                id: item.id,
                value: item.value,
                index: index,
              });
              let newShowDropdown = new Array(showDropdown.length).fill(false);
              setShowDropdown(newShowDropdown);
            }}
            placeHolder={strings?.SelectOption}
            firstChildStyle={styles.first_Child_Con}
            secondChildStyle={styles.second_Child_Con}
            onClick={() => {
              let newShowDropdown = showDropdown.map((Value, idx) =>
                idx === index ? !Value : false,
              );
              setShowDropdown(newShowDropdown);
            }}
            list={leaveArray}
            showDropdown={showDropdown[index]}
          />
        </View>
        <View style={styles.full_Day_Con}>
          <Label style={styles.date_Label} title={selectedLeaveType[index]} />
        </View>
        <TouchableOpacity
          style={styles.delete_Con}
          onPress={() => deleteLeave(value)}>
          <MaterialIcons name="delete" size={scale(20)} />
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <View style={styles.main}>
      <Label title={strings?.LeaveDetails} style={styles.title_Label} />
      {items}
      <Label title={strings?.ThisExclude} style={styles.warning_Txt} />
    </View>
  );
};

export default React.memo(LeaveDetailsLayout);
