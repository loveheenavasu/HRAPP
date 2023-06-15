import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import commonStyle from '../commonStyle';
import Label from '@src/CommonComponent/Lable';
import {HrMailngData} from '@src/Util/DummyData';
import MultiDropDown from '@src/CommonComponent/MultiDropdown';
import EditText from '@src/CommonComponent/EditText';
import {scale, verticalScale} from 'react-native-size-matters';
import User from 'react-native-vector-icons/EvilIcons';
import COLOR from '@src/Util/Color';
import CustomButton from '@src/CommonComponent/CustomButton';

const AddNotifySubmitCard: FC = () => {
  const [remark, setRemark] = useState<string>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  return (
    <View style={commonStyle.main}>
      <Label title="Notify Person" style={commonStyle.headingTxt} />
      <View style={commonStyle.rowView}>
        <MultiDropDown
          dataArr={HrMailngData}
          onSelectedItemsChange={e => setSelectedItems(e)}
          selectedItems={selectedItems}
        />
      </View>
      <Label title="Remarks" style={commonStyle.headingTxt} />
      <EditText
        Value={remark}
        Placholder="Enter remarks here"
        outerBoxStyle={{marginTop: verticalScale(5)}}
        multiline={true}
        OnChangeText={e => setRemark(e)}
      />
      <View style={styles.detailBox}>
        <User
          name="user"
          size={scale(50)}
          style={{height: scale(50)}}
          color={COLOR.LIGHT_GREY}
        />
        <Label title="Rohit Chugh" style={commonStyle.headingTxt} />
        <Label title="APPROVING MANAGER" style={commonStyle.headingTxt} />
      </View>
      <CustomButton btnStyle={styles.btn} name="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '40%',
    height: '11%',
    marginTop: scale(5),
  },
  detailBox: {
    alignItems: 'center',
  },
});
export default AddNotifySubmitCard;
