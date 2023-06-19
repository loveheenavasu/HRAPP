import React from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import DownIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface Props {
  Data: string[];
  onSelect: (item: any) => void;
  dropDownStyle?: ViewStyle;
  dropTxtStyle?: TextStyle;
  displayTxt: string;
}
const DropDownSelect = (props: Props) => {
  const {Data, onSelect, dropDownStyle, dropTxtStyle, displayTxt} = props;

  const _dropDownIcon = () => {
    return <DownIcon name="chevron-down" size={17} />;
  };

  return (
    <>
      <SelectDropdown
        data={Data}
        onSelect={onSelect}
        defaultButtonText={displayTxt}
        buttonStyle={[styles.dropBtn, {...dropDownStyle}]}
        buttonTextStyle={[styles.dropBtnTxt, {...dropTxtStyle}]}
        renderDropdownIcon={_dropDownIcon}
      />
    </>
  );
};

export default DropDownSelect;
