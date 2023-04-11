import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import EditText from '../../CommonComponent/EditText';
import Label from '../../CommonComponent/Lable';
import styles from './styles';
import CustomButton from '../../CommonComponent/CustomButton';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setpassword] = useState<string>('');
  return (
    <View style={styles.main}>
      <Label title="Login to your Account" style={styles.title} />
      <EditText
        Placholder="Email id"
        Value={email}
        OnChangeText={e => setEmail(e)}
        showImg
      />
      <EditText
        Placholder="Password"
        Value={password}
        OnChangeText={e => setpassword(e)}
        showImg
      />
      <TouchableOpacity style={styles.forgotTxtBox}>
        <Text style={styles.forgotTxt}>Forgot My Password</Text>
      </TouchableOpacity>
      <CustomButton name="Login" />
    </View>
  );
};
export default Login;
