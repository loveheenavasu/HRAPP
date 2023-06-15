import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import COLOR from '@Util/Color';
import {verticalScale} from 'react-native-size-matters';

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
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  scroll: {
    paddingBottom: verticalScale(100),
  },
});
export default WrapComponent;
