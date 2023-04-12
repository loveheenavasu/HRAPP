import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import DashboardCard from './DashboardCard';
import Header from '../../CommonComponent/Header';
import {NextpubHoli, lastLeaveData, pubHoliArr, upcomingLeave} from '../../Util/DummyData'
const Dashboard = () => {
  return (
    <ScrollView style={styles.main}>
      <Header/>
      <DashboardCard title='Dashboard' titleStyle={styles.title}/>
      <DashboardCard title='UPCOMING LEAVE' titleStyle={styles.normalTitle} rightLogo DataArr={upcomingLeave}/>
      <DashboardCard title='LAST LEAVE TAKEN' titleStyle={styles.normalTitle} rightLogo  DataArr={lastLeaveData}/>
      <DashboardCard title='NEXT PUBLIC HOLIDAY' titleStyle={styles.normalTitle}rightLogo DataArr={NextpubHoli}/> 
      <DashboardCard leave={true}/>
    </ScrollView>
  );
};

export default Dashboard;
