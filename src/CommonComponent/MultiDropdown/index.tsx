import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import COLOR from '../../Util/Color';
import english from '../../Language/English';

interface Props {
  dataArr: object[];
  onSelectedItemsChange: (txt: any) => void;
  selectedItems: any[];
  dropBoxStyle?: ViewStyle;
}

const MultiDropDown = (props: Props) => {
  const {dataArr, onSelectedItemsChange, selectedItems, dropBoxStyle} = props;
  return (
    <View style={[styles.multiSelectBox, {...dropBoxStyle}]}>
      <MultiSelect
        // hideTags
        items={dataArr}
        uniqueKey={english.Email}
        //   ref={(component) => { this.multiSelect = component }}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText={english.AddEmailId}
        searchInputPlaceholderText={english.SearchEmail}
        //   onChangeInput={ (text)=> console.log(text)}
        //   altFontFamily="ProximaNova-Light"
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        //   tagTextColor="#CCC"
        selectedItemTextColor={COLOR.NAVY}
        selectedItemIconColor={COLOR.NAVY}
        itemTextColor="#000"
        displayKey={english.Email}
        //   searchInputStyle={{ color: '#CCC' }}
        submitButtonColor={selectedItems?.length ? COLOR.NAVY : COLOR.DARK_GRAY}
        submitButtonText={english.AddEmail}
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
