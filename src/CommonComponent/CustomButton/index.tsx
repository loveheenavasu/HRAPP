import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import COLOR from '../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';

interface Props {
  onPress?: (txt: any) => void;
  name: string;
  txtStyle?: TextStyle;
  btnStyle?: ViewStyle;
}

const CustomButton = (props: Props) => {
  const {name, onPress, btnStyle, txtStyle} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, {...btnStyle}]}>
      <Text style={[styles.txt, {...txtStyle}]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: COLOR.GREEN,
    paddingVertical: verticalScale(12),
    alignItems: 'center',
    borderRadius: 7,
  },
  txt: {
    color: COLOR.WHITE,
    fontSize: scale(14),
  },
});
