import React, {FC} from 'react';
import {Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import {scale} from 'react-native-size-matters';
import Plus from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {COLOR} from '@Util';

interface Props {
  onPress?: (txt: any) => void;
  name: string;
  txtStyle?: TextStyle;
  btnStyle?: ViewStyle;
  addLogo?: boolean;
}

const CustomButton: FC<Props> = ({
  name,
  onPress,
  btnStyle,
  txtStyle,
  addLogo,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, {...btnStyle}]}>
      {addLogo && <Plus name="plus" size={scale(11)} color={COLOR.WHITE} />}
      <Text style={[styles.txt, {...txtStyle}]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
