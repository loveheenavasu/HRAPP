import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { scale, verticalScale } from 'react-native-size-matters';
import DownIcon from 'react-native-vector-icons/Ionicons'

interface Props {
    Data:string[];
    onSelect:(item:any) => void;
    dropDownStyle?: ViewStyle;
    dropTxtStyle?: TextStyle;
    displayTxt:string;
}


const DropDown = (props: Props) => {
    const { Data, onSelect,dropDownStyle,dropTxtStyle,displayTxt} = props;

    const _dropDownIcon = () => {
        return (
            <DownIcon name='chevron-down' size={17} />
        )
    }

    return (
        <>
            <SelectDropdown
                data={Data}
                onSelect={onSelect}
                defaultButtonText={displayTxt}
                buttonStyle={[styles.dropBtn, { ...dropDownStyle }]}
                buttonTextStyle={[styles.dropBtnTxt, { ...dropTxtStyle }]}
                renderDropdownIcon={_dropDownIcon}
            />

        </>
    )
}

export default DropDown

const styles = StyleSheet.create({
    dropBtn: {
        // borderWidth:1,
        borderRadius: scale(5),
        width: '95%',
        height: '10%',
        marginTop: verticalScale(7),
        marginBottom: verticalScale(7)
    },
    dropBtnTxt: {
        fontSize: scale(12)
    },
})