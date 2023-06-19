import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import styles from './styles';

interface Props {
  children: React.ReactNode;
}
const WrapComponent: FC<Props> = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.main}>
      <ScrollView contentContainerStyle={styles.scroll}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

export default WrapComponent;
