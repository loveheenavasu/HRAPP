import React, {useRef, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
} from 'react-native';
import EditText from '../../CommonComponent/EditText';
import Label from '../../CommonComponent/Lable';
import styles from './styles';
import CustomButton from '../../CommonComponent/CustomButton';
import FastImage from 'react-native-fast-image';
import Images from '../../Util/Images';
import ToastMsg from '../../CommonComponent/Toast/CustomToast';
import {isEmailValid} from '../../Util/Validator';
import {useDispatch, useSelector} from 'react-redux';
import {getUserLogin} from '../../Redux/Action/loginReducer';
import {RootState} from '../../Redux/store';
import Loader from '../../CommonComponent/Loader';
import {verticalScale} from 'react-native-size-matters';
import {TextInput} from 'react-native-gesture-handler';

const Login = () => {
  const dispatch = useDispatch();
  const mUserData = useSelector((state: RootState) => state.loginReducer);
  const [email, setEmail] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const emailRef = useRef();
  // const passwordRef = useRef();
  const passwordRef = useRef<TextInput | null>(null);

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
      dispatch(
        getUserLogin({email: email, name: 'Test Kumar', password: password}),
      );
      // Storage.storeData(UserId, '1');
      // Storage.storeData(UserData, JSON.stringify({email: email}));
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
            Value={email}
            OnChangeText={e => setEmail(e.trim())}
            showImg
            OnSubmit={() => passwordRef?.current.focus()}
            ReturnKeyType="next"
          />
          <EditText
            inputRef={passwordRef}
            Placholder="Password"
            Value={password}
            OnChangeText={e => setpassword(e)}
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
              height: verticalScale(34),
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Login;
