import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import COLOR from '../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';
import Plus from 'react-native-vector-icons/AntDesign';
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

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: COLOR.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  txt: {
    color: COLOR.WHITE,
    fontSize: scale(14),
  },
});
