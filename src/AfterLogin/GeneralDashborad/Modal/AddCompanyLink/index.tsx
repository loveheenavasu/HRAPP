import React, {FC} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Label, CustomButton, EditText} from '@CommonComponent';
import {COLOR} from '@Util';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import strings from '@src/Language/strings';

interface Props {
  showModal: boolean;
  onClickCancel?: () => void;
  onClickSubmit?: () => void;
}
const AddCompanyLinkModal: FC<Props> = ({
  showModal,
  onClickCancel,
  onClickSubmit,
}) => {
  return (
    <Modal visible={showModal} transparent={true} animationType="slide">
      <SafeAreaView style={styles.second_main}>
        <KeyboardAvoidingView
          style={styles.main}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView>
            <View style={styles.sub_Main}>
              <Label
                style={styles.title_Label}
                title={strings?.PleasePaste_LinkHere}
              />
              <EditText
                outerBoxStyle={{marginTop: scale(10)}}
                Value=""
                Placholder={strings?.PleaseLink_Here}
                ReturnKeyType="done"
                OnSubmit={() => Keyboard.dismiss()}
              />
              <CustomButton
                name={strings?.Submit}
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

export default AddCompanyLinkModal;
