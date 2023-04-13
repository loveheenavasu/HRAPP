import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Label from '../Lable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';

interface Props {
  showDropdown?: boolean;
  onClick?: () => void;
  selectedValue: string;
  onClickValue: (txt: any) => void;
  list?: object[];
  title: string;
}

const DropDown = (props: Props) => {
  const {showDropdown, onClick, selectedValue, onClickValue, list, title} =
    props;
  const styles = dynamicStyles(selectedValue);
  return (
    <>
      <Label title={title} />
      <TouchableOpacity
        style={styles.dropDown_Main}
        onPress={onClick}
        activeOpacity={0.6}>
        <View style={styles.value_Con}>
          <Label
            title={selectedValue ? selectedValue : 'Please select Year'}
            style={styles.selected_Label}
          />
        </View>
        <View style={styles.icon_Con}>
          <AntDesign
            name={showDropdown ? 'caretup' : 'caretdown'}
            color={COLOR.LIGHT_GREY}
            size={scale(20)}
          />
        </View>
      </TouchableOpacity>
      {showDropdown &&
        list?.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              parseInt(selectedValue) === item?.year
                ? styles.year_Value_ConTwo
                : styles.year_Value_Con,
            ]}
            onPress={() => onClickValue(item)}>
            <Label title={item.year.toString()} />
          </TouchableOpacity>
        ))}
    </>
  );
};

const dynamicStyles = (selectedValue: string) =>
  StyleSheet.create({
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
    dropDown_Main: {
      width: '100%',
      height: verticalScale(38),
      borderRadius: scale(5),
      borderWidth: scale(0.5),
      borderColor: COLOR.LIGHT_GREY,
      flexDirection: 'row',
    },
    value_Con: {
      width: '90%',
      height: '100%',
      paddingLeft: scale(10),
      paddingRight: scale(5),
      justifyContent: 'center',
    },
    icon_Con: {
      width: '10%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    selected_Label: {
      color: selectedValue ? COLOR.BLACK : COLOR.LIGHT_GREY,
      marginVertical: 0,
    },
    year_Value_Con: {
      width: '100%',
      borderBottomColor: COLOR.GREY,
      borderBottomWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLOR.WHITE,
    },
    year_Value_ConTwo: {
      width: '100%',
      borderBottomColor: COLOR.GREY,
      borderBottomWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLOR.GREY,
    },
  });

export default DropDown;
