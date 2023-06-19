import React, {FC} from 'react';
import {Text, TextStyle} from 'react-native';
import styles from './styles';

interface Props {
  title?: string;
  style?: TextStyle;
  maxLines?: number | 1;
}
const Label: FC<Props> = ({title, style, maxLines}) => {
  return (
    <Text numberOfLines={maxLines} style={[styles.main, {...style}]}>
      {title}
    </Text>
  );
};
export default Label;
