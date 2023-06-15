import {FC, useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import COLOR from '../../Util/Color';

interface Props {
  dataArr: object[];
  onSelectedItemsChange: (txt: any) => void;
  selectedItems: any[];
  dropBoxStyle?: ViewStyle;
}

const MultiDropDown: FC<Props> = ({
  dataArr,
  onSelectedItemsChange,
  selectedItems,
  dropBoxStyle,
}) => {
  return (
    <View style={[styles.multiSelectBox, {...dropBoxStyle}]}>
      <MultiSelect
        items={dataArr}
        uniqueKey="email"
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="Add Email Id's"
        searchInputPlaceholderText="Search Email..."
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        selectedItemTextColor={COLOR.NAVY}
        selectedItemIconColor={COLOR.NAVY}
        itemTextColor="#000"
        displayKey="email"
        submitButtonColor={selectedItems?.length ? COLOR.NAVY : COLOR.DARK_GRAY}
        submitButtonText="Add Email"
      />
    </View>
  );
};

export default MultiDropDown;

const styles = StyleSheet.create({
  multiSelectBox: {
    flex: 1,
  },
});
