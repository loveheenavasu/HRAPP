import React from 'react';
import {
  FlatList,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Label from '../../../../CommonComponent/Lable';
import {scale} from 'react-native-size-matters';
import EditText from '../../../../CommonComponent/EditText';
import COLOR from '../../../../Util/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../../../../CommonComponent/CustomButton';

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
}
const NotifyPersonLayout = ({
  value,
  onChangeText,
  list,
  onClickCheckBox,
  remarkValue,
  onRemarkChange,
  refRemark,
  refNotify,
  clickSubmitButton,
}: Props) => {
  return (
    <View style={styles.main}>
      <Label title="Notify Person" style={styles.title_Label} />
      <EditText
        inputRef={refNotify}
        Value={value}
        outerBoxStyle={styles.outer_Con}
        Placholder={'Please enter email id '}
        ReturnKeyType="done"
        OnSubmit={() => Keyboard.dismiss()}
        OnChangeText={onChangeText}
      />
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
                />
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item => item?.id.toString()}
      />
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
                      style={{marginRight: scale(4)}}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
      <Label title="Remark" style={styles.title_Label} />
      <EditText
        outerBoxStyle={styles.remark_outer_Con}
        Value={remarkValue}
        Placholder="Please enter somethings"
        multiline={true}
        Style={styles.remark_Edit}
        OnChangeText={onRemarkChange}
        inputRef={refRemark}
      />
      <CustomButton
        onPress={clickSubmitButton}
        btnStyle={styles.btn}
        name="Submit"
      />
    </View>
  );
};

export default React.memo(NotifyPersonLayout);
