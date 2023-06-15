import React, { FC } from 'react';
import {StyleSheet, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../../Util/Color';
import DropDown from '../../../CommonComponent/DropDown';

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

const DropdownLayout:FC<Props> = ({showDropdown, onClick, selectedValue, onClickYear}) => {

  return (
    <View style={styles.main}>
      <DropDown
        title="Year"
        selectedValue={selectedValue}
        showDropdown={showDropdown}
        onClick={onClick}
        list={mTempArray}
        onClickValue={item => onClickYear(item)}
        placeHolder="Please select year"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    maxHeight: verticalScale(500),
    marginTop: verticalScale(6),
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
});

export default DropdownLayout;
