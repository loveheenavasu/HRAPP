import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextStyle,
  KeyboardTypeOptions,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import COLOR from '../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';
import User from 'react-native-vector-icons/FontAwesome';
import Password from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
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
  showImg?: boolean;
  showEye?: boolean;
  onClickSecure?: () => void;
  SecureText?: boolean;
  outerBoxStyle?: ViewStyle;
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
    showImg,
    showEye,
    onClickSecure,
    SecureText,
    outerBoxStyle,
  } = props;

  return (
    <>
      <View style={[styles.inputBox, {...outerBoxStyle}]}>
        {showImg && (
          <View style={styles.imgBox}>
            {Placholder == 'Email id' ? (
              <User name="user" size={20} />
            ) : (
              <Password name="cellphone-key" size={20} />
            )}
          </View>
        )}
        <TextInput
          ref={ref}
          placeholder={Placholder}
          value={Value}
          onChangeText={OnChangeText}
          style={[styles.main, {...Style}]}
          returnKeyType={ReturnKeyType}
          onSubmitEditing={OnSubmit}
          blurOnSubmit={false}
          keyboardType={KeyboradType}
          autoFocus={false}
          secureTextEntry={SecureText}
        />
        {showEye && (
          <TouchableOpacity style={styles.eyeBox} onPress={onClickSecure}>
            <Entypo
              name={SecureText ? 'eye-with-line' : 'eye'}
              color={COLOR.BLACK}
              size={scale(17)}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    height: verticalScale(40),
    fontSize: scale(13),
    flex: 1,
  },
  inputBox: {
    flexDirection: 'row',
    paddingHorizontal: '2%',
    borderWidth: scale(0.6),
    marginTop: verticalScale(20),
    width: '98%',
    alignSelf: 'center',
    borderRadius: 7,
    borderColor: COLOR.BLACK,
    fontSize: scale(17),
  },
  imgBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(6),
  },
  eyeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(4),
  },
});

export default EditText;
