import React, {FC} from 'react';
import {View} from 'react-native';
import {Label, CustomDropdown} from '@CommonComponent';
import styles from './styles';
import strings from '@src/Language/strings';

interface Props {
  onClickType: (item: {id: number; value: string}) => void;
}

const LeaveTypeLayout: FC<Props> = ({onClickType}) => {
  return (
    <View style={styles.main}>
      <View style={styles.rowView}>
        <View style={styles.annual_Levae_Con}>
          <CustomDropdown
            titleStyle={styles.title_Label}
            title={strings?.LeaveType}
            data={[{id: 0, value: strings?.Annual}]}
            onClick={item => onClickType(item)}
            placeHolder={strings?.SelectLeave_Type}
          />
        </View>
        <View style={styles.annual_Bal_Con}>
          <Label
            title={strings?.AnnualBalance}
            style={styles.annual_Bal_Label}
          />
          <Label
            title={`5.5${strings?.Days}`}
            style={styles.annual_Bal_Value}
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(LeaveTypeLayout);
