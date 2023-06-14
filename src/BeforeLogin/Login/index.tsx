import React, {FC, useRef, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  TextInput,
} from 'react-native';
import EditText from '../../CommonComponent/EditText';
import Label from '../../CommonComponent/Lable';
import styles from './styles';
import CustomButton from '../../CommonComponent/CustomButton';
import FastImage from 'react-native-fast-image';
import Images from '../../Util/Images';
import {isEmailValid} from '../../Util/Validator';
import {useDispatch, useSelector} from 'react-redux';
import {getUserLogin} from '../../Redux/Action/loginReducer';
import {RootState} from '../../Redux/store';
import Loader from '../../CommonComponent/Loader';
import {verticalScale} from 'react-native-size-matters';
import Toast from '../../Util/Helper/ToastType';

import ToastMsg from '../../CommonComponent/Toast/CustomToast';

interface loginObj {
  email: string;
  password: string;
}

const Login: FC = () => {
  const dispatch = useDispatch();
  const mUserData = useSelector((state: RootState) => state.loginReducer);
  const [loginData, setLoginData] = useState<loginObj>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const passwordRef = useRef<TextInput | null>(null);

  const submit = () => {
    if (!loginData?.email?.trim() && !loginData?.password?.trim()) {
      ToastMsg({
        status: 'error',
        msg: 'All fields are required',
      });
    } else if (!loginData?.email?.trim()) {
      ToastMsg({
        status: 'error',
        msg: 'Please enter Email',
      });
    } else if (!isEmailValid(loginData?.email.trim())) {
      ToastMsg({
        status: 'error',
        msg: 'Please enter valid Email',
      });
    } else if (!loginData?.password.trim()) {
      ToastMsg({
        status: 'error',
        msg: 'Please enter password',
      });
    } else {
      dispatch(
        getUserLogin({
          email: loginData?.email,
          name: 'Test Kumar',
          password: loginData?.password,
        }),
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.main_Con}>
      {mUserData?.hideLoader && <Loader />}
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
            Value={loginData?.email}
            OnChangeText={e => setLoginData({...loginData, email: e.trim()})}
            showImg
            OnSubmit={() => passwordRef?.current.focus()}
            ReturnKeyType="next"
          />
          <EditText
            inputRef={passwordRef}
            Placholder="Password"
            Value={loginData?.password}
            OnChangeText={e => setLoginData({...loginData, password: e.trim()})}
            showImg
            showEye={true}
            onClickSecure={() => setShowPassword(!showPassword)}
            SecureText={showPassword}
            OnSubmit={() => Keyboard.dismiss()}
            ReturnKeyType="done"
          />
          <TouchableOpacity style={styles.forgotTxtBox}>
            <Text style={styles.forgotTxt}>Forgot My Password</Text>
          </TouchableOpacity>
          <CustomButton
            name="Login"
            onPress={() => submit()}
            btnStyle={{
              height: verticalScale(38),
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Login;
