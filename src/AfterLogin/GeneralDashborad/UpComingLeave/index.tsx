import React, {FC} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import Calender from 'react-native-vector-icons/AntDesign';
import strings from '@src/Language/strings';
import styles from './styles';
import {COLOR} from '@Util';
import {Label} from '@CommonComponent';

interface Props {
  list?: object[];
}

const UpcomingLeave: FC<Props> = ({list}) => {
  return (
    <View style={styles.main}>
      <View style={styles.sub_Main}>
        <Label style={styles.title_Label} title={strings.UpComingLeave} />
        <TouchableOpacity>
          <Label style={styles.viewAll_Label} title={strings.ViewAll} />
        </TouchableOpacity>
      </View>
      <FlatList
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={list?.slice(0, 3)}
        renderItem={({item, index}) => {
          return (
            <View style={styles.list_Main}>
              <View style={styles.f_Child}>
                <Calender
                  name="calendar"
                  size={scale(25)}
                  color={COLOR.LIGHT_GREY}
                />
                <View style={styles.holiday_Con}>
                  <Label title={item?.holiday} style={styles.holiday_Label} />
                  <Label title={item?.date} style={styles.date_Label} />
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => {
          return (
            <View style={styles.empty_Con}>
              <Label
                style={styles.not_Found_Label}
                title={strings.NoUpcomingLeave}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default UpcomingLeave;
