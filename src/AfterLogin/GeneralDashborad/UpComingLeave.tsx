import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Label from '../../CommonComponent/Lable';
import COLOR from '../../Util/Color';
import {verticalScale, scale} from 'react-native-size-matters';
import Calender from 'react-native-vector-icons/AntDesign';

interface Props {
  list?: object[];
}

const UpcomingLeave = (props: Props) => {
  const {list} = props;

  return (
    <View style={styles.main}>
      <Label style={styles.title_Label} title="Upcoming Leave" />
      <FlatList
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={list}
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
              <Label style={styles.not_Found_Label} title="No Upcoming leave" />
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
  title_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(15),
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
    opacity: 0.7,
  },
});

export default UpcomingLeave;
