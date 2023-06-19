import React, {FC} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {DropDown} from '@CommonComponent';
import strings from '@src/Language/strings';

interface Props {
  showDropdown?: boolean;
  onClick?: () => void;
  selectedValue: string;
  onClickYear?: (txt: any) => void;
}

const currentYear = new Date().getFullYear();
const mTempArray: {value: number; id: number; selectedValue: boolean}[] = [];
for (let index = 0; index < 5; index++) {
  mTempArray.push({
    value: currentYear - index,
    id: index,
    selectedValue: false,
  });
}

const DropdownLayout: FC<Props> = ({
  showDropdown,
  onClick,
  selectedValue,
  onClickYear,
}) => {
  return (
    <View style={styles.main}>
      <DropDown
        title={strings?.Year}
        selectedValue={selectedValue}
        showDropdown={showDropdown}
        onClick={onClick}
        list={mTempArray}
        onClickValue={item => onClickYear(item)}
        placeHolder={strings?.PleaseSelect_Year}
      />
    </View>
  );
};

export default DropdownLayout;
