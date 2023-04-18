import { useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native"
import MultiSelect from 'react-native-multiple-select';
import COLOR from "../../Util/Color";

interface Props {
    dataArr: object[];
    onSelectedItemsChange:(txt:any)=>void;
    selectedItems:any[];
    dropBoxStyle?:ViewStyle
}

const MultiDropDown = (props:Props) => {
    const {dataArr,onSelectedItemsChange,selectedItems,dropBoxStyle} = props
     return (
        <View style={[styles.multiSelectBox,{...dropBoxStyle}]}>
            <MultiSelect
                // hideTags
                items={dataArr}
                uniqueKey="email"
                //   ref={(component) => { this.multiSelect = component }}
                onSelectedItemsChange={onSelectedItemsChange}  
                selectedItems={selectedItems} 
                selectText="Add Email Id's"
                searchInputPlaceholderText="Search Email..."
                //   onChangeInput={ (text)=> console.log(text)}
                //   altFontFamily="ProximaNova-Light"
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                //   tagTextColor="#CCC"
                selectedItemTextColor={COLOR.NAVY}
                selectedItemIconColor={COLOR.NAVY}
                itemTextColor="#000"
                displayKey="email"
                //   searchInputStyle={{ color: '#CCC' }}
                submitButtonColor={selectedItems?.length?COLOR.NAVY:COLOR.DARK_GRAY}
                submitButtonText="Add Email"
            />
        </View>
    )
}

export default MultiDropDown

const styles = StyleSheet.create({
    multiSelectBox:{
        flex:1
    }
})