import React, { FC } from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../../../Util/Color';
import DropDown from '../../../../CommonComponent/DropDown';
import Label from '../../../../CommonComponent/Lable';

const currentYear = new Date().getFullYear();
let mYearList: {id: number; value: number; selected: boolean}[] = [];
for (let index = 0; index < 5; index++) {
  mYearList.push({id: index, value: currentYear - index, selected: false});
}

const monthArray = [
  {id: 0, value: 'Jan', selected: false},
  {id: 2, value: 'Feb', selected: false},
  {id: 3, value: 'Mar', selected: false},
  {id: 4, value: 'April', selected: false},
  {id: 5, value: 'May', selected: false},
  {id: 6, value: 'Jun', selected: false},
  {id: 7, value: 'Jully', selected: false},
  {id: 8, value: 'Aug', selected: false},
  {id: 9, value: 'Sept', selected: false},
  {id: 10, value: 'Oct', selected: false},
  {id: 11, value: 'Nov', selected: false},
  {id: 12, value: 'Dec', selected: false},
];

interface Props {
  onClickMonthValue?: (item: any) => void;
  selectedMonth: string;
  showYear?: boolean;
  onClickDropDown?: () => void;
  showYearList?: boolean;
  onClickYearValue?: (item: any) => void;
  selectedYear: string;
  showMonthList?: boolean;
  onClickMonthDropDown?: () => void;
  onClickMonthApply?: () => void;
  onClickMonthCancel?: () => void;
  onClickYearApply?: () => void;
  onClickYearCancel?: () => void;
}

const YearMonthDropDown:FC<Props> = ({
  onClickMonthValue,
  selectedMonth,
  showYear,
  onClickDropDown,
  showYearList,
  onClickYearValue,
  selectedYear,
  showMonthList,
  onClickMonthDropDown,
  onClickMonthApply,
  onClickMonthCancel,
  onClickYearApply,
  onClickYearCancel,
}) => {
  const styles = dynaimicStyles(selectedMonth);
  return (
    <View style={styles.main}>
      {showYear ? (
        <>
          <DropDown
            onClickValue={item => onClickYearValue(item)}
            selectedValue={selectedYear}
            title={'Please select Year'}
            onClick={onClickDropDown}
            placeHolder="Please select Year"
            list={mYearList}
            showDropdown={showYearList}
          />
          {showYearList && (
            <View style={styles.calebder_Btn_Con}>
              <TouchableOpacity
                style={styles.cancel_Btn_Con}
                onPress={onClickYearCancel}>
                <Label title="Cancel" style={styles.cancel_Label} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.calender_Apply_Button}
                onPress={onClickYearApply}>
                <Label title="Apply" style={styles.cancel_Label} />
              </TouchableOpacity>
            </View>
          )}
        </>
      ) : (
        <>
          <DropDown
            onClickValue={item => onClickYearValue(item)}
            selectedValue={selectedMonth}
            title={'Please select Month'}
            onClick={onClickMonthDropDown}
            placeHolder="Please select Month"
            list={mYearList}
            showDropdown={false}
          />
          {showMonthList && (
            <>
              <ScrollView contentContainerStyle={styles.month_List_Con}>
                {monthArray?.map((item, index) => {
                  return (
                    <>
                      <TouchableOpacity
                        key={index}
                        style={styles.month_List_Back(item)}
                        onPress={() => onClickMonthValue(item)}>
                        <Label
                          title={item?.value}
                          style={styles.monthName_Label(item)}
                        />
                      </TouchableOpacity>
                    </>
                  );
                })}
              </ScrollView>
              <View style={styles.calebder_Btn_Con}>
                <TouchableOpacity
                  style={styles.cancel_Btn_Con}
                  onPress={onClickMonthCancel}>
                  <Label title="Cancel" style={styles.cancel_Label} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.calender_Apply_Button}
                  onPress={onClickMonthApply}>
                  <Label title="Apply" style={styles.cancel_Label} />
                </TouchableOpacity>
              </View>
            </>
          )}
        </>
      )}
    </View>
  );
};

const dynaimicStyles = (selectedMonth: any) =>
  StyleSheet.create({
    main: {
      width: '100%',
      maxHeight: verticalScale(500),
      marginVertical: verticalScale(3),
      borderRadius: scale(6),
      paddingHorizontal: scale(8),
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
    month_Title: {
      marginBottom: 0,
      marginLeft: scale(5),
    },
    month_List_Con: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: scale(10),
    },
    month_List_Back: (item: any) => ({
      width: scale(78.5),
      height: scale(86),
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: COLOR.GREY,
      borderWidth: scale(0.5),
      backgroundColor:
        selectedMonth === item?.value ? COLOR.PRIMARY : COLOR.WHITE,
    }),
    monthName_Label: (item: any) => ({
      color: item?.value === selectedMonth ? COLOR.WHITE : COLOR.BLACK,
    }),
    calebder_Btn_Con: {
      width: '100%',
      height: verticalScale(40),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: verticalScale(10),
    },
    cancel_Btn_Con: {
      width: scale(100),
      height: verticalScale(40),
      backgroundColor: COLOR.NAVY,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(5),
    },
    cancel_Label: {
      color: COLOR.WHITE,
      marginVertical: 0,
    },
    calender_Apply_Button: {
      width: scale(100),
      height: verticalScale(40),
      backgroundColor: COLOR.PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(5),
    },
  });

export default YearMonthDropDown;
