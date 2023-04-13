import React from 'react';
import {View, StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';
import Label from '../../CommonComponent/Lable';

const DashboardLayout = () => {
  return (
    <View style={styles.main}>
      <Label title="Dashboard" style={styles.s_Title} />
      <Label
        title="Check your upcoming leaves,Leave balance or apply for one"
        style={styles.des}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    maxHeight: verticalScale(500),
    marginTop: verticalScale(6),
    marginBottom: verticalScale(3),
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
  s_Title: {
    fontSize: scale(18),
    fontWeight: '500',
    color: COLOR.NAVY,
    marginBottom: verticalScale(5),
  },
  des: {
    fontSize: scale(11),
    marginVertical: 0,
    opacity: 0.7,
  },
});

export default DashboardLayout;
