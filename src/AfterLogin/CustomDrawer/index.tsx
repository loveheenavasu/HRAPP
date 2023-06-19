import React, {useEffect, useState} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {logOut} from '../../Redux/Action/loginReducer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Label} from '@CommonComponent';
import {COLOR, Storage} from '@Util';
import strings from '@src/Language/strings';
import styles from './styles';

function CustomDrawerContent({navigation}: any) {
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
        <Label style={styles.short_Name_Label} title={strings.TK} />
      </View>
      <Label style={styles.name_Label} title={strings.ProfileName} />
      <TouchableOpacity
        style={styles.first_Child}
        onPress={() => navigation.navigate('Dashboard')}>
        <View style={styles.circle_Con}>
          <Entypo name="home" color={COLOR.WHITE} size={scale(18)} />
        </View>
        <Label style={styles.home_Label} title={strings.Home} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.second_Child}
        onPress={() => navigation.navigate('GeneralDashboard')}>
        <View style={styles.leave_circle_Con}>
          <Entypo name="calendar" color={COLOR.WHITE} size={scale(18)} />
        </View>
        <Label style={styles.home_Label} title={strings.Leave} />
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
        <Label style={styles.home_Label} title={strings.ChangePassword} />
      </TouchableOpacity>
      <View style={styles.logout_Con}>
        <TouchableOpacity onPress={() => logOutAlert()}>
          <Label style={styles.logout_Label} title={strings.Logout} />
        </TouchableOpacity>
        <Label title={'Version : ' + `${appVersion}`} />
      </View>
    </View>
  );
}

export default CustomDrawerContent;
