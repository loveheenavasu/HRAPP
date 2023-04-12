import React, {useRef, useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../CommonComponent/Header';
import Label from '../../CommonComponent/Lable';
import EditText from '../../CommonComponent/EditText';
import CustomButton from '../../CommonComponent/CustomButton';
import ToastMsg from '../../CommonComponent/Toast/CustomToast';
import styles from './styles';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const newRef = useRef(null);
  const conRef = useRef(null);

  const submit = () => {
    if (!oldPassword && !newPassword && !confirmPassword) {
      ToastMsg({
        status: 'error',
        msg: 'All fields are required',
      });
    } else if (!oldPassword) {
      ToastMsg({
        status: 'error',
        msg: 'Please enter old password',
      });
    } else if (!newPassword) {
      ToastMsg({
        status: 'error',
        msg: 'Please enter new password',
      });
    } else if (newPassword.trim().length < 4) {
      ToastMsg({
        status: 'error',
        msg: 'New Password should be minimum 4 character',
      });
    } else if (!confirmPassword) {
      ToastMsg({
        status: 'error',
        msg: 'Please enter confirm password',
      });
    } else if (newPassword != confirmPassword) {
      ToastMsg({
        status: 'error',
        msg: 'New Password and confirm password did not match!',
      });
    }
  };

  const deleteAlert = () => {
    Alert.alert('', 'Are you sure you want to delete your account', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
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
          <TouchableOpacity
            style={styles.delete_Con}
            onPress={() => deleteAlert()}>
            <Label title="Delete Account" style={styles.delete_Label} />
          </TouchableOpacity>
        </>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;
