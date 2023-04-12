import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';
import Label from '../../CommonComponent/Lable';
import Home from 'react-native-vector-icons/Entypo';
import Calender from 'react-native-vector-icons/AntDesign';

interface Props {
  list?: object[];
}

const UpComingLeaveLayout = (props: Props) => {
  const {list} = props;

  return (
    <View style={styles.main}>
      <View style={styles.header_Con}>
        <Label title="UPCOMING LEAVE" style={styles.s_Title} />
        <Home name="home" size={scale(23)} color={COLOR.LIGHT_GREY} />
      </View>
      <FlatList
        data={list}
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    maxHeight: verticalScale(500),
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
    paddingBottom: scale(10),
  },
  title_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(15),
    opacity: 0.8,
  },
  header_Con: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  s_Title: {
    fontSize: scale(12),
    fontWeight: '500',
    color: COLOR.NAVY,
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
  coloumView: {
    paddingLeft: scale(11),
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
});

export default UpComingLeaveLayout;
