import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import EditText from '../../CommonComponent/EditText';
import Label from '../../CommonComponent/Lable';
import styles from './styles';
import CustomButton from '../../CommonComponent/CustomButton';
import FastImage from 'react-native-fast-image';
import Images from '../../Util/Images';
import ToastMsg from '../../CommonComponent/Toast/CustomToast';
import {isEmailValid} from '../../Util/Validator';
import * as Storage from '../../Service/Storage';
import {UserId} from '../../Util/StorageKey';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const submit = () => {
    if (!email?.trim() && !password?.trim()) {
      ToastMsg({
        status: 'error',
        msg: 'All fields are required',
      });
    } else if (!email.trim()) {
      ToastMsg({
        status: 'error',
        msg: 'Please enter Email',
      });
    } else if (!isEmailValid(email.trim())) {
      ToastMsg({
        status: 'error',
        msg: 'Please enter valid Email',
      });
    } else if (!password.trim()) {
      ToastMsg({
        status: 'error',
        msg: 'Please enter password',
      });
    } else {
      Storage.storeData(UserId, '1');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.main_Con}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.main}>
          <Label title="Login to your Account" style={styles.title} />
          <FastImage
            style={styles.logo_Con}
            source={Images.LoginDemoIcon}
            resizeMode={FastImage.resizeMode.contain}
          />
          <EditText
            Placholder="Email id"
            Value={email}
            OnChangeText={e => setEmail(e.trim())}
            showImg
          />
          <EditText
            Placholder="Password"
            Value={password}
            OnChangeText={e => setpassword(e)}
            showImg
            showEye={true}
            onClickSecure={() => setShowPassword(!showPassword)}
            SecureText={showPassword}
          />
          <TouchableOpacity style={styles.forgotTxtBox}>
            <Text style={styles.forgotTxt}>Forgot My Password</Text>
          </TouchableOpacity>
          <CustomButton name="Login" onPress={() => submit()} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Login;
