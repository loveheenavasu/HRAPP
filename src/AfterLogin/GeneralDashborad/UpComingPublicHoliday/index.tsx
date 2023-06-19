import React, {FC} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {verticalScale, scale} from 'react-native-size-matters';
import Calender from 'react-native-vector-icons/AntDesign';
import strings from '@src/Language/strings';
import {Label} from '@CommonComponent';
import {COLOR} from '@Util';
import styles from './styles';

interface Props {
  public_Holiday_List?: object[];
}
const UpcomingPublicHolidays: FC<Props> = ({public_Holiday_List}) => {
  return (
    <View style={styles.main}>
      <View style={styles.title_Con}>
        <Label
          style={styles.title_Label}
          title={strings.UpcomingPublicHoliday}
        />
        <TouchableOpacity>
          <Label style={styles.viewAll_Label} title={strings.ViewAll} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list_Con}
        data={public_Holiday_List?.slice(0, 3)}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: verticalScale(10)}}
        renderItem={({item}) => {
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
        keyExtractor={index => index.toString()}
        ListEmptyComponent={() => {
          return (
            <View style={styles.empty_Con}>
              <Label
                style={styles.not_Found_Label}
                title={strings.NoUpcomingPubHoliday}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default UpcomingPublicHolidays;
