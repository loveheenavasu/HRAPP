import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../../../Util/Color';
import Label from '../../../../CommonComponent/Lable';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const StaffDropDownLayout = ({
  personal,
  staff,
  yearly,
  monthly,
  onClickPersonal,
  onClickStaff,
  onClickYearly,
  onClickMonthly,
}: Props) => {
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

const styles = StyleSheet.create({
  main: {
    width: '100%',
    maxHeight: verticalScale(500),
    marginBottom: verticalScale(3),
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
    paddingBottom: scale(10),
  },
  title_Label: {
    color: COLOR.NAVY,
    fontWeight: 'bold',
    fontSize: scale(15),
    opacity: 0.8,
  },
  f_Child: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  personal_Staff_Con: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },
  personal_Con: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  staff_Con: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  personal_Label: {
    marginVertical: 0,
    color: COLOR.BLACK,
    opacity: 0.9,
  },
  yearly_Month_Con: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: verticalScale(10),
    alignItems: 'center',
  },
  yearly_Con: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthly_Con: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  monthly_Icon: {
    marginLeft: scale(14),
  },
  yearly_Icon: {
    marginLeft: scale(26),
  },
});

export default StaffDropDownLayout;
