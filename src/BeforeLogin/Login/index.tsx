import React, {FC, useRef, useState} from 'react';
import {Text, TouchableOpacity, View, Keyboard, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  CustomButton,
  Label,
  EditText,
  WrapComponent,
  Loader,
  ToastMsg,
} from '@CommonComponent';
import {Images} from '@Util';
import styles from './styles';
import {isEmailValid} from '../../Util/Validator';
import {useDispatch, useSelector} from 'react-redux';
import {getUserLogin} from '../../Redux/Action/loginReducer';
import {AppDispatch, RootState} from '../../Redux/store';

interface userData {
  email: string;
  password: string;
  showPassword: boolean;
}

const Login: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mUserData = useSelector((state: RootState) => state.loginReducer);
  const [loginData, setLoginData] = useState<userData>({
    email: '',
    password: '',
    showPassword: true,
  });

  const passwordRef = useRef<TextInput>();

  const submit = () => {
    const {email, password} = loginData;
    if (!email?.trim() && !password?.trim()) {
      ToastMsg({
        status: 'error',
        msg: 'All fields are required',
      });
    } else if (!email?.trim()) {
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
      // dispatch(
      //   getUserLogin({
      //     email: loginData?.email,
      //     name: 'Test Kumar',
      //     password: loginData?.password,
      //   }),
      // );

      dispatch(getUserLogin())
    }
  };

  return (
    <WrapComponent>
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
          onClickSecure={() =>
            setLoginData({
              ...loginData,
              showPassword: !loginData.showPassword,
            })
          }
          SecureText={loginData.showPassword}
          OnSubmit={() => Keyboard.dismiss()}
          ReturnKeyType="done"
        />
        <TouchableOpacity style={styles.forgotTxtBox}>
          <Text style={styles.forgotTxt}>Forgot My Password</Text>
        </TouchableOpacity>
        <CustomButton
          name="Login"
          onPress={() => submit()}
          btnStyle={styles.button_Con}
        />
        {mUserData?.hideLoader && <Loader />}
        {/* <Loader Show={mUserData?.hideLoader} /> */}
      </View>
    </WrapComponent>
  );
};
export default Login;
