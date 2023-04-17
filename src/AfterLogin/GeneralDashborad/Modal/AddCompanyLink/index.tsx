import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import COLOR from '../../../../Util/Color';
import Label from '../../../../CommonComponent/Lable';
import {scale, verticalScale} from 'react-native-size-matters';
import EditText from '../../../../CommonComponent/EditText';
import CustomButton from '../../../../CommonComponent/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  showModal: boolean;
  onClickCancel?: () => void;
  onClickSubmit?: () => void;
}

const AddCompanyLinkModal = ({
  showModal,
  onClickCancel,
  onClickSubmit,
}: Props) => {
  console.log('------AddCompanyLinkModal--->', 123);

  return (
    <Modal visible={showModal} transparent={true} animationType="slide">
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={styles.main}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView>
            <View style={styles.sub_Main}>
              <Label
                style={styles.title_Label}
                title="Please paste/write your link here"
              />
              <EditText
                outerBoxStyle={{marginTop: scale(10)}}
                Value=""
                Placholder="Please enter link here.."
                ReturnKeyType="done"
                OnSubmit={() => Keyboard.dismiss()}
              />
              <CustomButton
                name="Submit"
                btnStyle={styles.button_Con}
                onPress={onClickSubmit}
              />
              <TouchableOpacity
                style={styles.circle_Con}
                onPress={onClickCancel}>
                <AntDesign name="close" color={COLOR.WHITE} size={scale(20)} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  sub_Main: {
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: scale(10),
    padding: scale(10),
    backgroundColor: COLOR.WHITE,
    marginTop: verticalScale(200),
  },
  title_Label: {
    marginVertical: 0,
    marginLeft: scale(4),
  },
  button_Con: {
    height: verticalScale(40),
    width: '99%',
    marginHorizontal: '.5%',
    marginTop: verticalScale(10),
  },
  circle_Con: {
    position: 'absolute',
    top: scale(-10),
    height: scale(40),
    width: scale(40),
    borderRadius: scale(20),
    backgroundColor: COLOR.PRIMARY,
    right: scale(-10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddCompanyLinkModal;
