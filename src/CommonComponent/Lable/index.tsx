import React from 'react';
import {Text, TextStyle, StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';

interface Props {
  title: string;
  style?: TextStyle;
}
const Label = (props: Props) => {
  const {title, style} = props;
  return <Text style={[styles.main, {...style}]}>{title}</Text>;
};

const styles = StyleSheet.create({
  main: {
    fontSize: scale(13),
    color: COLOR.BLACK,
    marginVertical: verticalScale(10),
  },
});

export default Label;
