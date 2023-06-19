import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import Attach from 'react-native-vector-icons/Ionicons';
import strings from '@src/Language/strings';
import {CustomButton, Label} from '@CommonComponent';
import {COLOR} from '@Util';
import styles from './styles';

interface Props {
  onClickAdd?: () => void;
}
const UpComingLink: FC<Props> = ({onClickAdd}) => {
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
        <Label title={strings.AddSomeLinks} style={styles.leaveTxt} />
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

export default UpComingLink;
