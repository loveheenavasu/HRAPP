import React from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import Label from '../../CommonComponent/Lable';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';
import User from 'react-native-vector-icons/EvilIcons';

interface Props {
  list?: object[];
}

const CelebrationLayout = (props: Props) => {
  const {list} = props;

  return (
    <View style={styles.main}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Label style={styles.title_Label} title="Upcoming Leave" />
        <TouchableOpacity>
          <Label style={styles.viewAll_Label} title="View ALL" />
        </TouchableOpacity>
        </View>
      
      <FlatList
        nestedScrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={list?.slice(0,3)}
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
  viewAll_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(11),
    opacity: 0.8,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: scale(5),
    marginVertical: verticalScale(5),
    borderBottomColor: COLOR.GREY,
    borderBottomWidth: 1,
    paddingBottom: scale(10),
  },
  userImg: {
    height: 60,
  },
  f_Child: {
    width: '100%',
    marginLeft: scale(10),
    borderLeftColor: COLOR.NAVY,
    borderLeftWidth: scale(0.3),
    paddingLeft: scale(10),
  },
  date_Label: {
    fontWeight: 'bold',
    fontSize: scale(12),
    opacity: 0.68,
    marginVertical: 0,
  },
  name_Label: {
    marginTop: verticalScale(2.5),
    marginBottom: 0,
    fontSize: scale(12),
    color: COLOR.BLACK,
    opacity: 0.6,
  },
  event_Label: {
    marginTop: verticalScale(2.5),
    marginBottom: 0,
    fontSize: scale(11),
    color: COLOR.BLACK,
    opacity: 0.6,
  },
});

export default CelebrationLayout;
