import React, { FC } from 'react';
import {StyleSheet, View} from 'react-native';
import commonStyle from './commonStyle';
import Label from '../../../CommonComponent/Lable';
import {useState} from 'react';
import {HrMailngData} from '../../../Util/DummyData';
import MultiDropDown from '../../../CommonComponent/MultiDropdown';
import EditText from '../../../CommonComponent/EditText';
import {scale, verticalScale} from 'react-native-size-matters';
import User from 'react-native-vector-icons/EvilIcons';
import COLOR from '../../../Util/Color';
import CustomButton from '../../../CommonComponent/CustomButton';

const AddNotifySubmitCard:FC = () => {
  const [remark, setRemark] = useState();
  const [selectedItems, setSelectedItems] = useState([]);
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

export default AddNotifySubmitCard;

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
