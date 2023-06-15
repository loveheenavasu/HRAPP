import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';
import Label from '../Lable';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

interface Props {
  title: string;
  navigation?: any;
  showBackButton?: boolean;
}
const Header: FC<Props> = ({title, showBackButton}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.first_Child}
        onPress={() => {
          showBackButton ? navigation.goBack() : navigation?.toggleDrawer();
        }}>
        {showBackButton ? (
          <AntDesign name="arrowleft" size={scale(22)} color={COLOR.BLACK} />
        ) : (
          <Feather name="menu" size={scale(22)} color={COLOR.PRIMARY} />
        )}
      </TouchableOpacity>
      <View style={styles.second_Child}>
        <Label style={{fontWeight: '700', opacity: 0.7}} title={title} />
      </View>
    </View>
  );
};

export default Header;
