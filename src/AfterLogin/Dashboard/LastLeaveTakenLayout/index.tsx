import React, {FC} from 'react';
import {scale} from 'react-native-size-matters';
import Calender from 'react-native-vector-icons/AntDesign';
import {View, FlatList} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {COLOR} from '@Util';
import {Label, CustomButton} from '@CommonComponent';
import styles from './styles';
import strings from '@src/Language/strings';

interface ListItem {
  id: number | string;
  fromTo: string;
  type: string;
  days: string;
}

interface Props {
  list?: ListItem[];
}

interface navigationPorps {
  LeaveHistory: undefined;
}

const LastLeaveTakenLayout: FC<Props> = ({list}) => {
  const navigation = useNavigation<NavigationProp<navigationPorps>>();

  return (
    <View style={styles.main}>
      <View style={styles.header_Con}>
        <Label title={strings.LASTLEAVE_TAKEN} style={styles.s_Title} />
        <Calender name="calendar" size={scale(23)} color={COLOR.LIGHT_GREY} />
      </View>
      <FlatList
        data={list}
        keyExtractor={item => item?.id.toString()}
        renderItem={({item}) => {
          return (
            <>
              <Label title={item?.days} style={styles.bigTxt} />
              <Label title={item?.type} style={styles.normalTxt} />
              <Label title={item?.fromTo} style={styles.normalTxt} />
              <CustomButton
                name={strings.ViewHistory}
                btnStyle={styles.btn}
                onPress={() => navigation.navigate('LeaveHistory')}
              />
            </>
          );
        }}
      />
    </View>
  );
};

export default LastLeaveTakenLayout;
