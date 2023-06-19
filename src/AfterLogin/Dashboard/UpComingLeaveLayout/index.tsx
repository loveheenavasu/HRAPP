import React, {FC} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import Calender from 'react-native-vector-icons/AntDesign';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Label} from '@CommonComponent';
import {COLOR} from '@Util';
import styles from './styles';
import strings from '@src/Language/strings';

interface ListItem {
  date: string;
  day: string;
  id: number;
}

interface Props {
  list?: ListItem[];
}

interface navigationProps {
  UpComingViewAll: {
    list?: ListItem[];
  };
}

const UpComingLeaveLayout: FC<Props> = ({list}) => {
  const navigation = useNavigation<NavigationProp<navigationProps>>();
  return (
    <View style={styles.main}>
      <View style={styles.header_Con}>
        <Label title={strings.UPCOMINGLEAVE} style={styles.s_Title} />
        <TouchableOpacity
          onPress={() => navigation.navigate('UpComingViewAll', {list: list})}>
          <Label style={styles.viewAll_Label} title={strings.ViewALL} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={list?.slice(0, 3)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.rowView} onPress={() => null}>
              <Calender
                name="calendar"
                size={scale(30)}
                color={COLOR.LIGHT_GREY}
              />
              <View style={styles.list_Sub_Child}>
                <Label title={item?.date} style={styles.date_Label} />
                <Label title={item?.day} style={styles.day_Label} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default UpComingLeaveLayout;
