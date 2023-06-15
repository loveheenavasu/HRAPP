import React, { FC } from 'react';
import {StyleSheet, View, TouchableOpacity, Keyboard} from 'react-native';
import Label from '../../CommonComponent/Lable';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';
import EditText from '../../CommonComponent/EditText';
import ThumbUp from 'react-native-vector-icons/FontAwesome';
import Chat from 'react-native-vector-icons/Ionicons';

interface Props {
  value?: string;
  onChangeText?: () => void;
}

const HappinesLayout:FC<Props> = ({value, onChangeText}) => {
  return (
    <View style={styles.main}>
      <Label style={styles.title_Label} title="Happiness" />
      <Label
        title="How are you feeling recently? Tell us"
        style={styles.subTitle_Label}
      />
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
        <Label title="Hmm.. What are you thinking?" style={styles.chatTxt} />
      </View>
      <EditText
        Placholder="Enter your thoughts"
        outerBoxStyle={{marginTop: verticalScale(5)}}
        Value={value}
        OnChangeText={onChangeText}
        OnSubmit={() => Keyboard.dismiss()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    maxHeight: verticalScale(600),
    marginTop: verticalScale(6),
    borderRadius: scale(6),
    paddingHorizontal: scale(10),
    backgroundColor: COLOR.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    paddingBottom: verticalScale(10),
  },
  title_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(15),
    opacity: 0.8,
  },
  subTitle_Label: {
    fontSize: scale(12),
    textAlign: 'center',
    fontWeight: '600',
  },
  rowView: (props: string) => ({
    flexDirection: 'row',
    justifyContent: props,
    alignItems: 'center',
    paddingLeft: scale(5),
    marginVertical: verticalScale(5),
  }),
  rowViewHand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: scale(5),
    marginVertical: verticalScale(5),
    width: '40%',
    alignSelf: 'center',
  },
  hLine: {
    height: scale(1),
    width: '95%',
    backgroundColor: COLOR.GREY,
    alignSelf: 'center',
    marginTop: verticalScale(2),
  },
  chatTxt: {
    marginLeft: scale(7),
  },
});
export default HappinesLayout;
