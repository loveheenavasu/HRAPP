import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import COLOR from '../../../../Util/Color';
import { scale, verticalScale } from 'react-native-size-matters';
import Label from '../../../../CommonComponent/Lable';
import DropDown from '../../../../CommonComponent/DropDown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

let leaveArray = [
  {id: 0, value: 'Full Day'},
  {id: 1, value: 'Half Day'},
];

interface Props {
  list?: string[];
  deleteLeave?: (item: any) => void;
  clickLeaveFullHalf?: (item: any) => void;
  selectedLeaveType?: any[];
}

const LeaveDetailsLayout: FC<Props> = ({ list }) => {

  return (
    <View style={styles.main}>
      <Label title="Leave Details" style={styles.title_Label} />
      {list?.length > 0 && (
        <>
          {list?.map(item => {
            return <Label title="mith" />;
          })}
        </>
      )}
    </View>
  );
};

export default React.memo(LeaveDetailsLayout);
