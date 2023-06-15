import React, { FC } from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';
import Label from '../../CommonComponent/Lable';
import Calender from 'react-native-vector-icons/AntDesign';
import {StyleSheet, View, FlatList} from 'react-native';
import CustomButton from '../../CommonComponent/CustomButton';
import {useNavigation} from '@react-navigation/native';

interface Props {
  list?: object[];
}

const LastLeaveTakenLayout:FC<Props> = ({list}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.header_Con}>
        <Label title="LAST LEAVE TAKEN" style={styles.s_Title} />
        <Calender name="calendar" size={scale(23)} color={COLOR.LIGHT_GREY} />
      </View>

      <FlatList
        data={list}
        keyExtractor={item => item?.id}
        renderItem={({item}) => {
          return (
            <>
              <Label title={item?.days} style={styles.bigTxt} />
              <Label title={item?.type} style={styles.normalTxt} />
              <Label title={item?.fromTo} style={styles.normalTxt} />
              <CustomButton
                name="View History"
                btnStyle={styles.btn}
                onPress={() => navigation.navigate('LeaveHistory')}
              />
            </>
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
  bigTxt: {
    marginVertical: verticalScale(1),
    fontSize: scale(28),
    marginLeft: scale(4),
    color: COLOR.NAVY,
  },
  normalTxt: {
    marginVertical: verticalScale(1),
    fontSize: scale(11),
    marginLeft: scale(4),
    color: COLOR.BLACK,
    opacity: 0.4,
  },
  btn: {
    width: scale(150),
    height: scale(35),
    marginTop: verticalScale(20),
  },
});
export default LastLeaveTakenLayout;
