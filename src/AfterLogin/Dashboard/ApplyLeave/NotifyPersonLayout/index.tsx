import React, {FC} from 'react';
import {
  FlatList,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {scale} from 'react-native-size-matters';
import {Label, EditText, CustomButton} from '@CommonComponent';
import {COLOR} from '@Util';
import strings from '@src/Language/strings';
import styles from './styles';

interface Props {
  value: string;
  onChangeText?: (txt: any) => void;
  list?: any[];
  onClickCheckBox?: (item: any) => void;
  remarkValue: string;
  onRemarkChange?: (txt: any) => void;
  refRemark?: any;
  refNotify?: any;
  clickSubmitButton?: () => void;
  clickNotifyDropDown?: () => void;
  showList?: boolean;
}
const NotifyPersonLayout: FC<Props> = ({
  value,
  onChangeText,
  list,
  onClickCheckBox,
  remarkValue,
  onRemarkChange,
  refRemark,
  refNotify,
  clickSubmitButton,
  clickNotifyDropDown,
  showList,
}) => {
  return (
    <View style={styles.main}>
      <Label title={strings.NotifyPerson} style={styles.title_Label} />
      <View style={styles.edit_Con}>
        <EditText
          inputRef={refNotify}
          Value={value}
          outerBoxStyle={styles.outer_Con}
          Placholder={strings?.EnterEmail}
          ReturnKeyType="done"
          OnSubmit={() => Keyboard.dismiss()}
          OnChangeText={onChangeText}
          showEye={false}
        />
        <TouchableOpacity
          style={styles.upIcon_Con}
          onPress={clickNotifyDropDown}>
          <AntDesign
            name={showList ? 'caretup' : 'caretdown'}
            color={COLOR.LIGHT_GREY}
            size={scale(20)}
          />
        </TouchableOpacity>
      </View>
      {showList && (
        <FlatList
          style={styles.flat_Con}
          data={list}
          renderItem={({item}) => {
            return (
              <View style={styles.flat_MainChild}>
                <Label title={item?.email} />
                <TouchableOpacity
                  style={styles.flat_F_Child}
                  onPress={() => onClickCheckBox(item)}>
                  <AntDesign
                    name={item?.selected ? 'checksquare' : 'checksquareo'}
                    color={item?.selected ? COLOR.PRIMARY : COLOR.LIGHT_GREY}
                    size={scale(18)}
                    style={styles.checkbox_Con}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          ListEmptyComponent={() => {
            return (
              <View style={styles.notFound}>
                <Label
                  style={styles.not_Found_Label}
                  title={strings?.NotFound}
                />
              </View>
            );
          }}
          keyExtractor={item => item?.id.toString()}
        />
      )}
      <ScrollView contentContainerStyle={styles.selected_Person_Main}>
        {list?.map((item, index) => {
          return (
            <View key={index}>
              {item?.selected && (
                <View style={styles.selected_ListMain}>
                  <Label style={styles.selected_Label} title={item.email} />
                  <TouchableOpacity onPress={() => onClickCheckBox(item)}>
                    <Entypo
                      name="circle-with-cross"
                      size={scale(20)}
                      color={COLOR.PRIMARY}
                      style={styles.cross_Con}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
      <Label title={strings?.Remark} style={styles.title_Label} />
      <EditText
        outerBoxStyle={styles.remark_outer_Con}
        Value={remarkValue}
        Placholder={strings?.EnterSomething}
        multiline={true}
        Style={styles.remark_Edit}
        OnChangeText={onRemarkChange}
        inputRef={refRemark}
      />
      <CustomButton
        onPress={clickSubmitButton}
        btnStyle={styles.btn}
        name={strings?.Submit}
      />
    </View>
  );
};

export default React.memo(NotifyPersonLayout);
