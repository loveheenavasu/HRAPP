import React, {FC, useEffect, useRef} from 'react';
import {ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {Header} from '@CommonComponent';
import {NextpubHoli, lastLeaveData, upcomingLeave} from '@Util';
import styles from './styles';
import DashboardLayout from './DashBoardLayout';
import UpComingLeaveLayout from './UpComingLeaveLayout';
import LastLeaveTakenLayout from './LastLeaveTakenLayout';
import PublicHolidayLayout from './PublicHolidayLayout';
import LeaveLayout from './LeaveLayout';
import strings from '@src/Language/strings';

const Dashboard: FC = () => {
  const isFocused = useIsFocused();
  const scrollRef = useRef<ScrollView>(null);
  useEffect(() => {
    scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});
  }, [isFocused]);

  return (
    <>
      <Header title={strings.Dashboard} />
      <ScrollView
        ref={scrollRef}
        style={styles.main}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>
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
