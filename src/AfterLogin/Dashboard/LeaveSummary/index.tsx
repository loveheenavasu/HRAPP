import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../../../CommonComponent/Header';
import DropdownLayout from './DropDownLayout';
import AnnualLeaveLayout from './AnnualLayout';
import HospitalizeLeaveLayout from './HorizontalLayout';
import {verticalScale} from 'react-native-size-matters';
import SickLeaveLayout from './SickLeaveLayout/SickLeaveLayout';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../../CommonComponent/Loader';
import styles from './styles';
import strings from '@src/Language/strings';

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
      <Header showBackButton={true} title={strings?.LeaveSummary} />
      <ScrollView
        contentContainerStyle={{paddingBottom: verticalScale(100)}}
        style={styles.main}>
        <View style={styles.sub_Main}>
          <Loader Visible={showLoader} />
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

export default LeaveSummary;
