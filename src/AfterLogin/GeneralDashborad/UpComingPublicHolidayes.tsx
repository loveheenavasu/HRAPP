import React, { FC } from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Label from '../../CommonComponent/Lable';
import COLOR from '../../Util/Color';
import {verticalScale, scale} from 'react-native-size-matters';
import Calender from 'react-native-vector-icons/AntDesign';
import strings from '@src/Language/strings';
interface Props {
  public_Holiday_List?: object[];
}
const UpcomingPublicHolidays:FC<Props> = ({public_Holiday_List}) => {
  return (
    <View style={styles.main}>
      <View style={styles.title_Con}>
        <Label style={styles.title_Label} title={strings.UpcomingPublicHoliday} />
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
                title={strings.NoUpcomingPubHoliday}/>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    maxHeight: verticalScale(600),
    marginTop: verticalScale(6),
    borderRadius: scale(6),
    paddingHorizontal: scale(10),
    backgroundColor: COLOR.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  title_Con: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(15),
    opacity: 0.8,
  },
  list_Con: {
    width: '100%',
  },
  viewAll_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(11),
    opacity: 0.8,
  },
  empty_Con: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  not_Found_Label: {
    color: COLOR.BLACK,
    opacity: 0.6,
  },
  list_Main: {
    width: '100%',
  },
  f_Child: {
    flexDirection: 'row',
    marginBottom: verticalScale(10),
  },
  holiday_Con: {
    width: '100%',
    marginLeft: scale(10),
  },
  holiday_Label: {
    fontSize: scale(12),
    marginVertical: 0,
  },
  date_Label: {
    fontSize: scale(10),
    marginTop: scale(2),
    marginBottom: 0,
    color: COLOR.BLACK,
    opacity: 0.4,
  },
});

export default UpcomingPublicHolidays;
