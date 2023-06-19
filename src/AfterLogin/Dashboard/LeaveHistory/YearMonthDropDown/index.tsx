import React, {FC} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {DropDown, Label} from '@CommonComponent';
import DynaimicStyles from './styles';
import strings from '@src/Language/strings';

const currentYear = new Date().getFullYear();
let mYearList: {id: number; value: number; selected: boolean}[] = [];
for (let index = 0; index < 5; index++) {
  mYearList.push({id: index, value: currentYear - index, selected: false});
}

const monthArray = [
  {id: 0, value: strings?.WeekName[1], selected: false},
  {id: 2, value: strings?.WeekName[2], selected: false},
  {id: 3, value: strings?.WeekName[3], selected: false},
  {id: 4, value: strings?.WeekName[4], selected: false},
  {id: 5, value: strings?.WeekName[5], selected: false},
  {id: 6, value: strings?.WeekName[6], selected: false},
  {id: 7, value: strings?.WeekName[7], selected: false},
  {id: 8, value: strings?.WeekName[8], selected: false},
  {id: 9, value: strings?.WeekName[9], selected: false},
  {id: 10, value: strings?.WeekName[10], selected: false},
  {id: 11, value: strings?.WeekName[11], selected: false},
  {id: 12, value: strings?.WeekName[12], selected: false},
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

const YearMonthDropDown: FC<Props> = ({
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
  const styles = DynaimicStyles(selectedMonth);
  return (
    <View style={styles.main}>
      {showYear ? (
        <>
          <DropDown
            onClickValue={item => onClickYearValue(item)}
            selectedValue={selectedYear}
            title={strings?.PleaseSelect_Year}
            onClick={onClickDropDown}
            placeHolder={strings?.PleaseSelect_Year}
            list={mYearList}
            showDropdown={showYearList}
          />
          {showYearList && (
            <View style={styles.calebder_Btn_Con}>
              <TouchableOpacity
                style={styles.cancel_Btn_Con}
                onPress={onClickYearCancel}>
                <Label title={strings?.Cancel} style={styles.cancel_Label} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.calender_Apply_Button}
                onPress={onClickYearApply}>
                <Label title={strings?.Apply} style={styles.cancel_Label} />
              </TouchableOpacity>
            </View>
          )}
        </>
      ) : (
        <>
          <DropDown
            onClickValue={item => onClickYearValue(item)}
            selectedValue={selectedMonth}
            title={strings?.PleaseSelect_Month}
            onClick={onClickMonthDropDown}
            placeHolder={strings?.PleaseSelect_Month}
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
                  <Label title={strings?.Cancel} style={styles.cancel_Label} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.calender_Apply_Button}
                  onPress={onClickMonthApply}>
                  <Label title={strings?.Apply} style={styles.cancel_Label} />
                </TouchableOpacity>
              </View>
            </>
          )}
        </>
      )}
    </View>
  );
};

export default YearMonthDropDown;
