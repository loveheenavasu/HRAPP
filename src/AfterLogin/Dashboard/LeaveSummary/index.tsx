import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../../../CommonComponent/Header';
import COLOR from '../../../Util/Color';
import Label from '../../../CommonComponent/Lable';
import DropdownLayout from './DropdownLayout';
import AnnualLeaveLayout from './AnnualLeaveLayout';

const LeaveSummary = () => {
  const [showYearDropDown, setShowYearDropDown] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<string>('');

  return (
    <>
      <Header showBackButton={true} title="Leave Summary" />
      <ScrollView style={styles.main}>
        <View style={styles.sub_Main}>
          <DropdownLayout
            selectedValue={selectedYear}
            showDropdown={showYearDropDown}
            onClick={() => setShowYearDropDown(!showYearDropDown)}
            onClickYear={txt => setSelectedYear(txt?.year)}
          />
          <AnnualLeaveLayout />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR.GREY,
  },
  sub_Main: {
    width: '90%',
    marginHorizontal: '5%',
    height: '100%',
    backgroundColor: COLOR.GREY,
  },
});

export default LeaveSummary;
