import React, { FC } from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Label from '../../CommonComponent/Lable';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';
import Attach from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../CommonComponent/CustomButton';
import strings from '@src/Language/strings';
interface Props {
  onClickAdd?: () => void;
}
const UpComingLink:FC<Props> = ({onClickAdd}) => {
  return (
    <View style={styles.main}>
       <View style={styles.sub_Main}>
        <Label style={styles.title_Label} title={strings.CompanyLinks} />
        <TouchableOpacity>
          <Label style={styles.viewAll_Label} title={strings.ViewAll} />
        </TouchableOpacity>
      </View>
      <>
        <TouchableOpacity>
          <Attach
            name="document-attach-sharp"
            size={50}
            color={COLOR.NAVY}
            style={styles.attachImg}
          />
        </TouchableOpacity>
        <Label title={strings.NoLinksAvailable} style={styles.leaveTxt} />
        <Label
          title={strings.AddSomeLinks}
          style={styles.leaveTxt}
        />
        <View style={styles.rowView}>
          <CustomButton
            name={strings.Add}
            btnStyle={styles.add_Button}
            addLogo
            txtStyle={{marginLeft: scale(7)}}
            onPress={onClickAdd}
          />
          <CustomButton name={strings.Edit} btnStyle={styles.edit_Button} />
        </View>
      </>
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
  },
  sub_Main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(15),
    opacity: 0.8,
    alignSelf: 'center',
  },
  viewAll_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(11),
    opacity: 0.8,
    
  },
  attachImg: {
    alignSelf: 'center',
  },
  leaveTxt: {
    fontSize: scale(12),
    textAlign: 'center',
    fontWeight: '600',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalScale(5),
    width: '90%',
    marginHorizontal: '5%',
  },
  add_Button: {
    backgroundColor: COLOR.NAVY,
    flexDirection: 'row',
    width: scale(80),
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(30),
    padding: 0,
  },
  edit_Button: {
    backgroundColor: COLOR.NAVY,
    width: scale(80),
    padding: verticalScale(7),
  },
 
});

export default UpComingLink;
