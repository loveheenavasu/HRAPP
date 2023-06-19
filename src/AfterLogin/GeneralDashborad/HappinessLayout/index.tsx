import React, {FC} from 'react';
import {View, TouchableOpacity, Keyboard} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';
import {Label, EditText} from '@CommonComponent';
import ThumbUp from 'react-native-vector-icons/FontAwesome';
import Chat from 'react-native-vector-icons/Ionicons';
import strings from '@src/Language/strings';
import styles from './styles';

interface Props {
  value?: string;
  onChangeText?: () => void;
}

const HappinesLayout: FC<Props> = ({value, onChangeText}) => {
  return (
    <View style={styles.main}>
      <Label style={styles.title_Label} title={strings.Happiness} />
      <Label title={strings.HowYouFeel} style={styles.subTitle_Label} />
      <View style={styles.rowViewHand}>
        <TouchableOpacity>
          <ThumbUp name="thumbs-up" size={30} color={COLOR.GREEN} />
        </TouchableOpacity>
        <TouchableOpacity>
          <ThumbUp name="thumbs-down" size={30} color={COLOR.RED} />
        </TouchableOpacity>
      </View>
      <View style={styles.hLine}></View>
      <View style={styles.rowView('flex-start')}>
        <Chat name="chatbubbles-sharp" size={30} color={COLOR.NAVY} />
        <Label title={strings.WhatYouThink} style={styles.chatTxt} />
      </View>
      <EditText
        Placholder={strings.EnterThought}
        outerBoxStyle={{marginTop: verticalScale(5)}}
        Value={value}
        OnChangeText={onChangeText}
        OnSubmit={() => Keyboard.dismiss()}
      />
    </View>
  );
};
export default HappinesLayout;
