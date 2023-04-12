import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';
import Label from '../Lable';
import Feather from 'react-native-vector-icons/Feather';

interface Props {
  title: string;
  navigation?: any;
}

const Header = (props: Props) => {
  const {title, navigation} = props;

  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.first_Child}>
        <Feather name="menu" size={scale(22)} color={COLOR.PRIMARY} />
      </TouchableOpacity>
      <View style={styles.second_Child}>
        <Label style={{fontWeight: '700', opacity: 0.7}} title={title} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: verticalScale(45),
    backgroundColor: COLOR.WHITE,
    flexDirection: 'row',
  },
  first_Child: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  second_Child: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '15%',
  },
});

export default Header;
