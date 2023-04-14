import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../../../CommonComponent/Header';
import COLOR from '../../../Util/Color';
import DropdownLayout from './DropdownLayout';
import AnnualLeaveLayout from './AnnualLeaveLayout';
import HospitalizeLeaveLayout from './HospitalizeLeaveLayout';
import {verticalScale} from 'react-native-size-matters';
import SickLeaveLayout from './SickLeaveLayout';

const LeaveSummary = () => {
  const [showYearDropDown, setShowYearDropDown] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<string>('');

  return (
    <>
      <Header showBackButton={true} title="Leave Summary" />
      <ScrollView
        contentContainerStyle={{paddingBottom: verticalScale(100)}}
        style={styles.main}>
        <View style={styles.sub_Main}>
          <DropdownLayout
            selectedValue={selectedYear}
            showDropdown={showYearDropDown}
            onClick={() => setShowYearDropDown(!showYearDropDown)}
            onClickYear={txt => {
              setSelectedYear(txt?.year), setShowYearDropDown(false);
            }}
          />
          <AnnualLeaveLayout />
          <HospitalizeLeaveLayout />
          <SickLeaveLayout />
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
    width: '95%',
    marginHorizontal: '2.5%',
    height: '100%',
    backgroundColor: COLOR.GREY,
  },
});

export default LeaveSummary;
