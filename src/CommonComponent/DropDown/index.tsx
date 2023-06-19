import React, {FC} from 'react';
import {TouchableOpacity, View, TextStyle, ViewStyle} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scale} from 'react-native-size-matters';
import {COLOR} from '@Util';
import {Label} from '@CommonComponent';
import dynamicStyles from './styles';

interface Props {
  showDropdown?: boolean;
  onClick?: () => void;
  selectedValue: string;
  onClickValue: (txt: any) => void;
  list?: object[];
  title: string;
  placeHolder: string;
  titleStyle?: TextStyle;
  firstChildStyle?: ViewStyle;
  secondChildStyle?: ViewStyle;
}
const DropDown: FC<Props> = ({
  showDropdown,
  onClick,
  selectedValue,
  onClickValue,
  list,
  title,
  placeHolder,
  titleStyle,
  firstChildStyle,
  secondChildStyle,
}) => {
  const styles = dynamicStyles(selectedValue);
  return (
    <>
      {title && <Label style={titleStyle} title={title} />}
      <TouchableOpacity
        style={styles.dropDown_Main}
        onPress={onClick}
        activeOpacity={0.6}>
        <View style={[{...styles.value_Con}, firstChildStyle]}>
          <Label
            title={selectedValue ? selectedValue : placeHolder}
            style={styles.selected_Label}
          />
        </View>
        <View style={[{...styles.icon_Con}, secondChildStyle]}>
          <AntDesign
            name={showDropdown ? 'caretup' : 'caretdown'}
            color={COLOR.LIGHT_GREY}
            size={scale(20)}
          />
        </View>
      </TouchableOpacity>
      {showDropdown && (
        <View style={styles.show_DropDown_Con}>
          {list?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                parseInt(selectedValue, 10) === item?.value
                  ? styles.year_Value_ConTwo
                  : styles.year_Value_Con,
              ]}
              onPress={() => onClickValue(item)}>
              <Label title={item?.value.toString()} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};

export default DropDown;
