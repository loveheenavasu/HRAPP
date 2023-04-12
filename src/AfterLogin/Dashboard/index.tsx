import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../CommonComponent/Header';

const Dashboard = (navigation: any) => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Header title="Dashboard" navigation={navigation} />
      <Text>mith</Text>
    </View>
  );
};

export default Dashboard;
