import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLOR} from '@Util';
import {Label} from '@CommonComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface Props {
  personal?: boolean;
  staff?: boolean;
  yearly?: boolean;
  monthly?: boolean;
  onClickPersonal?: () => void;
  onClickStaff?: () => void;
  onClickYearly?: () => void;
  onClickMonthly?: () => void;
}

const StaffDropDownLayout: FC<Props> = ({
  personal,
  staff,
  yearly,
  monthly,
  onClickPersonal,
  onClickStaff,
  onClickYearly,
  onClickMonthly,
}) => {
  return (
    <View style={styles.main}>
      <View style={styles.f_Child}>
        <View style={styles.personal_Staff_Con}>
          <View>
            <TouchableOpacity
              style={styles.personal_Con}
              onPress={onClickPersonal}>
              <Label title="Personal" style={styles.personal_Label} />
              <Ionicons
                name={
                  personal
                    ? 'md-radio-button-on-outline'
                    : 'md-radio-button-off-sharp'
                }
                size={scale(20)}
                color={personal ? COLOR.PRIMARY : COLOR.BLACK}
                style={{marginLeft: scale(11)}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.staff_Con} onPress={onClickStaff}>
              <Label title="Staff" style={styles.personal_Label} />
              <Ionicons
                name={
                  staff
                    ? 'md-radio-button-on-outline'
                    : 'md-radio-button-off-sharp'
                }
                size={scale(20)}
                color={staff ? COLOR.PRIMARY : COLOR.BLACK}
                style={{marginLeft: scale(33)}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.yearly_Month_Con}>
          <View>
            <TouchableOpacity style={styles.yearly_Con} onPress={onClickYearly}>
              <Label title="Yearly" style={styles.personal_Label} />
              <Ionicons
                name={
                  yearly
                    ? 'md-radio-button-on-outline'
                    : 'md-radio-button-off-sharp'
                }
                size={scale(20)}
                color={yearly ? COLOR.PRIMARY : COLOR.BLACK}
                style={styles.yearly_Icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.monthly_Con}
              onPress={onClickMonthly}>
              <Label title="Monthly" style={styles.personal_Label} />
              <Ionicons
                name={
                  monthly
                    ? 'md-radio-button-on-outline'
                    : 'md-radio-button-off-sharp'
                }
                size={scale(20)}
                color={monthly ? COLOR.PRIMARY : COLOR.BLACK}
                style={styles.monthly_Icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StaffDropDownLayout;
