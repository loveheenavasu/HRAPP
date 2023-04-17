import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../../../CommonComponent/Header';
import COLOR from '../../../Util/Color';
import DropdownLayout from './DropdownLayout';
import AnnualLeaveLayout from './AnnualLeaveLayout';
import HospitalizeLeaveLayout from './HospitalizeLeaveLayout';
import {verticalScale} from 'react-native-size-matters';
import SickLeaveLayout from './SickLeaveLayout';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../../CommonComponent/Loader';

const LeaveSummary = () => {
  const mFocus = useIsFocused();
  const [showYearDropDown, setShowYearDropDown] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    setSelectedYear('');
  }, [mFocus]);

  const onClickYear = (props: any) => {
    setShowLoader(true);
    setSelectedYear(props?.value);
    setShowYearDropDown(false);
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  };

  return (
    <>
      <Header showBackButton={true} title="Leave Summary" />
      <ScrollView
        contentContainerStyle={{paddingBottom: verticalScale(100)}}
        style={styles.main}>
        <View style={styles.sub_Main}>
          {showLoader && <Loader />}
          <DropdownLayout
            selectedValue={selectedYear}
            showDropdown={showYearDropDown}
            onClick={() => setShowYearDropDown(!showYearDropDown)}
            onClickYear={txt => onClickYear(txt)}
          />
          {selectedYear && !showLoader && (
            <>
              <AnnualLeaveLayout />
              <HospitalizeLeaveLayout />
              <SickLeaveLayout />
            </>
          )}
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
