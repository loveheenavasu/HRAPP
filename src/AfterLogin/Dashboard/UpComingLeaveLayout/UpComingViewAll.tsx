import React, { FC } from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import Header from '../../../CommonComponent/Header';
import COLOR from '../../../Util/Color';
import Label from '../../../CommonComponent/Lable';
import Calender from 'react-native-vector-icons/AntDesign';
import {scale, verticalScale} from 'react-native-size-matters';
import {useRoute} from '@react-navigation/native';

const ViewAllLayout:FC = () => {
  const mRoute = useRoute();

  return (
    <>
      <Header showBackButton={true} title="Upcoming Leave" />
      <View style={styles.sub_main}>
        <FlatList
          data={mRoute?.params?.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.rowView} onPress={() => null}>
                <Calender
                  name="calendar"
                  size={scale(30)}
                  color={COLOR.LIGHT_GREY}
                />
                <View style={{marginLeft: scale(10), justifyContent: 'center'}}>
                  <Label title={item?.date} style={styles.date_Label} />
                  <Label title={item?.day} style={styles.day_Label} />
                </View>
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={() => (
            <View style={styles.empty_Con}>
              <Label style={styles.not_Found_Label} title="Data not Found" />
            </View>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.GREY,
  },
  sub_main: {
    width: '96%',
    marginHorizontal: '2%',
    marginVertical: verticalScale(3),
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
    paddingVertical: scale(10),
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: scale(5),
    marginVertical: verticalScale(5),
    borderBottomColor: COLOR.GREY,
    borderBottomWidth: scale(0.5),
    paddingBottom: verticalScale(10),
  },
  date_Label: {
    marginVertical: verticalScale(1),
    fontSize: scale(11),
  },
  day_Label: {
    marginVertical: verticalScale(1),
    fontSize: scale(11),
    color: COLOR.BLACK,
    opacity: 0.4,
  },
  empty_Con: {
    width: '100%',
    height: verticalScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  not_Found_Label: {
    color: COLOR.BLACK,
    opacity: 0.5,
  },
});

export default ViewAllLayout;
