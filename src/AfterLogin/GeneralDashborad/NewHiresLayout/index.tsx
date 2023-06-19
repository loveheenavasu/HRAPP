import React, {FC} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import User from 'react-native-vector-icons/EvilIcons';
import strings from '@src/Language/strings';
import styles from './styles';
import {COLOR} from '@Util';
import {Label} from '@CommonComponent';

interface objItem {
  name: string;
  dept: string;
  date: string;
}
interface Props {
  list?: objItem[];
}

const NewHiresLayout: FC<Props> = ({list}) => {
  return (
    <View style={styles.main}>
      <View style={styles.sub_Main}>
        <Label style={styles.title_Label} title={strings.NewHires} />
        <TouchableOpacity>
          <Label style={styles.viewAll_Label} title={strings.ViewAll} />
        </TouchableOpacity>
      </View>
      <FlatList
        nestedScrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={list?.splice(0, 3)}
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
                <Label title={item?.name} style={styles.date_Label} />
                <Label title={item?.dept} style={styles.name_Label} />
                <Label title={item?.date} style={styles.event_Label} />
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => {
          return (
            <View style={styles.empty_Con}>
              <Label
                style={styles.not_Found_Label}
                title={strings.NoHireToday}
              />
            </View>
          );
        }}
      />
    </View>
  );
};
export default NewHiresLayout;
