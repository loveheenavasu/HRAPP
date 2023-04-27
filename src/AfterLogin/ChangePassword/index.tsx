import React, {useRef, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Header from '../../CommonComponent/Header';
import Label from '../../CommonComponent/Lable';
import EditText from '../../CommonComponent/EditText';
import CustomButton from '../../CommonComponent/CustomButton';
import styles from './styles';
import Toast from '../../Util/Helper/ToastType';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const newRef = useRef(null);
  const conRef = useRef(null);

  const submit = () => {
    if (!oldPassword && !newPassword && !confirmPassword) {
      Toast.error('All fields are required');
    } else if (!oldPassword) {
      Toast.error('Please enter old password');
    } else if (!newPassword) {
      Toast.error('Please enter new password');
    } else if (newPassword.trim().length < 4) {
      Toast.error('New Password should be minimum 4 character');
    } else if (!confirmPassword) {
      Toast.error('Please enter confirm password');
    } else if (newPassword !== confirmPassword) {
      Toast.error('New Password and confirm password did not match!');
    } else {
      Toast.success('Data submit successfully');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.main}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header title="Change Password" />
      <ScrollView contentContainerStyle={styles.sub_Main}>
        <>
          <Label title="Old Password" style={styles.title_Label} />
          <EditText
            showImg={false}
            outerBoxStyle={styles.edit_Con}
            Placholder="Please enter old Password"
            Value={oldPassword}
            OnChangeText={txt => setOldPassword(txt.trim())}
            OnSubmit={() => newRef?.current?.focus()}
            ReturnKeyType="next"
          />
          <Label title="New Password" style={styles.title_Label} />
          <EditText
            inputRef={newRef}
            showImg={false}
            outerBoxStyle={styles.edit_Con}
            Placholder="Please enter new Password"
            Value={newPassword}
            OnChangeText={txt => setNewPassword(txt.trim())}
            OnSubmit={() => conRef?.current?.focus()}
            ReturnKeyType="next"
          />
          <Label title="Confirm Password" style={styles.title_Label} />
          <EditText
            inputRef={conRef}
            showImg={false}
            outerBoxStyle={styles.edit_Con}
            Placholder="Please enter confirm Password"
            Value={confirmPassword}
            OnChangeText={txt => setConfirmPassword(txt.trim())}
            OnSubmit={() => Keyboard.dismiss()}
            ReturnKeyType="done"
          />
          <CustomButton
            onPress={() => submit()}
            name="Update"
            btnStyle={styles.button_Con}
          />
        </>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;
