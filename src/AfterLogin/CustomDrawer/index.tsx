import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import COLOR from '../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';
import Label from '../../CommonComponent/Lable';
import * as Storage from '../../Util/Service/Storage';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {logOut} from '../../Redux/Action/loginReducer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function CustomDrawerContent({navigation}) {
  const dispatch = useDispatch();
  const [appVersion, setAppVersion] = useState<string>('');

  useEffect(() => {
    setAppVersion('1.0');
  }, []);

  const logOutAlert = () => {
    Alert.alert('', 'Are you sure? You want to logout.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          Storage.clearAsyncStorage();
          dispatch(logOut());
        },
      },
    ]);
  };

  return (
    <View style={styles.main}>
      <View style={styles.profile_Icon_Con}>
        <Label style={styles.short_Name_Label} title="TK" />
      </View>
      <Label style={styles.name_Label} title="Profile Name" />
      <TouchableOpacity
        style={styles.first_Child}
        onPress={() => navigation.navigate('Dashboard')}>
        <View style={styles.circle_Con}>
          <Entypo name="home" color={COLOR.WHITE} size={scale(18)} />
        </View>
        <Label style={styles.home_Label} title="Home" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.second_Child}
        onPress={() => navigation.navigate('GeneralDashboard')}>
        <View style={styles.leave_circle_Con}>
          <Entypo name="calendar" color={COLOR.WHITE} size={scale(18)} />
        </View>
        <Label style={styles.home_Label} title="Leave" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.second_Child}
        onPress={() => navigation.navigate('ChangePassword')}>
        <View style={styles.circle_Con}>
          <FontAwesome
            name="expeditedssl"
            color={COLOR.WHITE}
            size={scale(22)}
          />
        </View>
        <Label style={styles.home_Label} title="Change Password" />
      </TouchableOpacity>
      <View style={styles.logout_Con}>
        <TouchableOpacity onPress={() => logOutAlert()}>
          <Label style={styles.logout_Label} title="Logout" />
        </TouchableOpacity>
        <Label title={'Version : ' + `${appVersion}`} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.WHITE,
  },
  profile_Icon_Con: {
    width: scale(90),
    height: scale(90),
    borderRadius: scale(45),
    backgroundColor: COLOR.PRIMARY,
    alignSelf: 'center',
    marginTop: verticalScale(30),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout_Con: {
    width: '100%',
    position: 'absolute',
    bottom: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout_Label: {
    fontWeight: '700',
  },
  name_Label: {
    alignSelf: 'center',
    fontSize: scale(14),
    marginTop: verticalScale(20),
  },
  short_Name_Label: {
    alignSelf: 'center',
    fontSize: scale(24),
    color: COLOR.WHITE,
    letterSpacing: 4,
  },
  circle_Con: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    backgroundColor: COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leave_circle_Con: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    backgroundColor: COLOR.RED,
    justifyContent: 'center',
    alignItems: 'center',
  },
  first_Child: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    marginTop: verticalScale(30),
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopColor: COLOR.LIGHT_GREY,
    borderBottomColor: COLOR.LIGHT_GREY,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: verticalScale(50),
  },
  second_Child: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopColor: COLOR.LIGHT_GREY,
    borderBottomColor: COLOR.LIGHT_GREY,
    borderBottomWidth: 1,
    height: verticalScale(50),
  },
  home_Label: {
    marginLeft: scale(20),
    fontWeight: 'normal',
  },
});

export default CustomDrawerContent;
