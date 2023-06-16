import React, {FC, useRef, useState} from 'react';
import {TouchableOpacity, View, Keyboard, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {
  CustomButton,
  Label,
  EditText,
  WrapComponent,
  Loader,
} from '@CommonComponent';
import {isEmailValid} from '@Validator';
import {Images, Toast} from '@Util';
import styles from './styles';
import {getUserLogin} from '@src/Redux/Action/loginReducer';
import {AppDispatch, RootState} from '@src/Redux/store';
import strings from '@src/Language/strings';

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

  const passwordRef = useRef<TextInput>(null);

  const submit = () => {
    const {email, password} = loginData;
    if (!email?.trim() && !password?.trim()) {
      Toast.error(strings.AllFieldsRequired);
    } else if (!email?.trim()) {
      Toast.error(strings.PleaseEmail);
    } else if (!isEmailValid(email.trim())) {
      Toast.error(strings.ValidEmail);
    } else if (!password.trim()) {
      Toast.error(strings.PleasePassword);
    } else {
      dispatch(
        getUserLogin({
          email: loginData?.email,
          name: 'Guest',
          password: loginData?.password,
        }),
      );
    }
  };

  return (
    <WrapComponent>
      <View style={styles.main}>
        <Label title={strings.LoginAccount} style={styles.title} />
        <FastImage
          style={styles.logo_Con}
          source={Images.LoginDemoIcon}
          resizeMode={FastImage.resizeMode.contain}
        />
        <EditText
          Placholder={strings.Email}
          Value={loginData?.email}
          OnChangeText={e => setLoginData({...loginData, email: e.trim()})}
          showImg
          OnSubmit={() => passwordRef?.current?.focus()}
          ReturnKeyType="next"
        />
        <EditText
          inputRef={passwordRef}
          Placholder={strings.Password}
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
          <Label title={strings.ForgotPassword} style={styles.forgotTxt} />
        </TouchableOpacity>
        <CustomButton
          name={strings.Login}
          onPress={() => submit()}
          btnStyle={styles.button_Con}
        />
        <Loader Visible={mUserData.hideLoader} />
      </View>
    </WrapComponent>
  );
};
export default Login;
