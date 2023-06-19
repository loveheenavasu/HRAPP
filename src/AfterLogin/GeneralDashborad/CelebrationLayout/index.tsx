import React, {FC} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import User from 'react-native-vector-icons/EvilIcons';
import strings from '@src/Language/strings';
import {Label} from '@CommonComponent';
import {COLOR} from '@Util';
import styles from './styles';

interface ListItem {
  id: string;
  date: string;
  name: string;
  event: string;
}
interface Props {
  list?: ListItem[];
}
const CelebrationLayout: FC<Props> = ({list}) => {
  return (
    <View style={styles.main}>
      <View style={styles.sub_Main}>
        <Label style={styles.title_Label} title={strings.Celebrations} />
        <TouchableOpacity>
          <Label style={styles.viewAll_Label} title={strings.ViewAll} />
        </TouchableOpacity>
      </View>

      <FlatList
        nestedScrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={list?.slice(0, 3)}
        keyExtractor={item => item?.id}
        contentContainerStyle={{paddingBottom: verticalScale(10)}}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.rowView} onPress={() => null}>
              <User
                name="user"
                size={scale(50)}
                style={{height: scale(50)}}
                color={COLOR.LIGHT_GREY}
              />
              <View style={styles.f_Child}>
                <Label title={item?.date} style={styles.date_Label} />
                <Label title={item?.name} style={styles.name_Label} />
                <Label title={item?.event} style={styles.event_Label} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CelebrationLayout;
