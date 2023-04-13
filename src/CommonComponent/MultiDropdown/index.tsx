import { useState } from "react";
import { StyleSheet } from "react-native"
import MultiSelect from 'react-native-multiple-select';

const MultiDropDown = () => {
    const [selecteItems, setSelecteItems] = useState([])


    const items = [{
        id: '92iijs7yta',
        name: 'Ondo'
    }, {
        id: 'a0s0a8ssbsd',
        name: 'Ogun'
    }, {
        id: '16hbajsabsd',
        name: 'Calabar'
    }, {
        id: 'nahs75a5sg',
        name: 'Lagos'
    }, {
        id: '667atsas',
        name: 'Maiduguri'
    }, {
        id: 'hsyasajs',
        name: 'Anambra'
    }, {
        id: 'djsjudksjd',
        name: 'Benue'
    }, {
        id: 'sdhyaysdj',
        name: 'Kaduna'
    }, {
        id: 'suudydjsjd',
        name: 'Abuja'
    }
    ];

    const _onSelectedItemsChange = (item) => {
        setSelecteItems(item)
    }

    return (
        <>
            <MultiSelect
                hideTags
                items={items}
                uniqueKey="id"
                //   ref={(component) => { this.multiSelect = component }}
                onSelectedItemsChange={(ele)=>_onSelectedItemsChange(ele)}
                selectedItems={selecteItems}
                selectText="Pick Items"
                searchInputPlaceholderText="Search Items..."
                //   onChangeInput={ (text)=> console.log(text)}
                //   altFontFamily="ProximaNova-Light"
                tagRemoveIconColor="#CCC"
                //   tagBorderColor="#CCC"
                //   tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                //   selectedItemIconColor="#CCC"
                //   itemTextColor="#000"
                displayKey="name"
                //   searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#CCC"
                submitButtonText="Submit"
            />
        </>
    )
}

export default MultiDropDown

const styles = StyleSheet.create({

})