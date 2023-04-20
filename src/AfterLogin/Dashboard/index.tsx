import React, {useEffect, useRef} from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../CommonComponent/Header';
import {NextpubHoli, lastLeaveData, upcomingLeave} from '../../Util/DummyData';
import DashboardLayout from './DashboardLayout';
import {scale, verticalScale} from 'react-native-size-matters';
import UpComingLeaveLayout from './UpComingLeaveLayout';
import LastLeaveTakenLayout from './LastLeaveTakenLayout';
import PublicHolidayLayout from './PublicHolidayLayout';
import LeaveLayout from './LeaveLayout';
import {useIsFocused} from '@react-navigation/native';

const Dashboard = () => {
  const isFocused = useIsFocused();
  const scrollRef = useRef('');
  useEffect(() => {
    scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
  }, [isFocused]);

  return (
    <>
      <Header title="Dashboard" />
      <ScrollView
        ref={scrollRef}
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
