import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';
import COLOR from '../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';

interface Props {
  Placholder?: string;
  Value: string | undefined;
  Style?: TextStyle;
  PlaceHolder?: string;
  OnChangeText?: (txt: any) => void;
  KeyboradType?: KeyboardTypeOptions | undefined;
  ref?: string;
  ReturnKeyType?: 'default' | 'go' | 'google' | 'next' | 'done';
  OnSubmit?(): void;
}

function EditText(props: Props): JSX.Element {
  const {
    Placholder,
    Value,
    OnChangeText,
    Style,
    ref,
    ReturnKeyType,
    OnSubmit,
    KeyboradType,
  } = props;

  return (
    <TextInput
      ref={ref}
      placeholder={Placholder}
      value={Value}
      onChangeText={OnChangeText}
      underlineColorAndroid={COLOR.WHITE}
      style={[styles.main, {...Style}]}
      returnKeyType={ReturnKeyType}
      onSubmitEditing={OnSubmit}
      blurOnSubmit={false}
      keyboardType={KeyboradType}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: verticalScale(45),
    paddingHorizontal: scale(10),
  },
});

export default EditText;
