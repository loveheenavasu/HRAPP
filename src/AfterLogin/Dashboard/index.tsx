import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../CommonComponent/Header';
import {
  NextpubHoli,
  lastLeaveData,
  pubHoliArr,
  upcomingLeave,
} from '../../Util/DummyData';
import DashboardLayout from './DashboardLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import UpComingLeaveLayout from './UpcomingLeaveLayout';
import LastLeaveTakenLayout from './LastLeaveTakenLayout';
import PublicHolidayLayout from './PublicHolidayLayout';
import LeaveLayout from './LeaveLayout';
const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      <ScrollView
        style={styles.main}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: verticalScale(100),
          paddingHorizontal: scale(10),
        }}>
        <DashboardLayout />
        <UpComingLeaveLayout list={upcomingLeave} />
        <LastLeaveTakenLayout list={lastLeaveData} />
        <PublicHolidayLayout list={NextpubHoli} />
        <LeaveLayout />
      </ScrollView>
    </>
  );
};

export default Dashboard;
