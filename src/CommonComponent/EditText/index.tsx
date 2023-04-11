import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextStyle,
  KeyboardTypeOptions,
  View
} from 'react-native';
import COLOR from '../../Util/Color';
import { scale, verticalScale } from 'react-native-size-matters';
import User from 'react-native-vector-icons/FontAwesome';
import Password from 'react-native-vector-icons/MaterialCommunityIcons';
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
  } = props;

  return (
    <>
      <View style={styles.inputBox}>
        {
          showImg && (
            <View style={styles.imgBox}>
              {
                Placholder == 'Email id' ?
                  <User name='user' size={20} />
                  :
                  <Password name='cellphone-key' size={20} />
              }
            </View>
          )
        }
        <TextInput
          ref={ref}
          placeholder={Placholder}
          value={Value}
          onChangeText={OnChangeText}
          // underlineColorAndroid={COLOR.WHITE}
          style={[styles.main, { ...Style }]}
          returnKeyType={ReturnKeyType}
          onSubmitEditing={OnSubmit}
          blurOnSubmit={false}
          keyboardType={KeyboradType}
        />
      </View>
    </>


  );
}

const styles = StyleSheet.create({
  main: {
    width: '96%',
    height: verticalScale(45),
    fontSize: scale(13)
  },
  inputBox: {
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    borderWidth: 1,
    marginTop: verticalScale(30),
    width: '98%',
    alignSelf: 'center',
    borderRadius: 7,
    borderColor: COLOR.BLACK,
    fontSize: scale(17)
  },
  imgBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(6)
  },
});

export default EditText;
