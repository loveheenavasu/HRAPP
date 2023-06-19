import React, {FC} from 'react';
import {View} from 'react-native';
import {Label} from '@CommonComponent';
import strings from '@src/Language/strings';
import styles from './styles';

const DashboardLayout: FC = () => {
  return (
    <View style={styles.main}>
      <Label title={strings.Dashboard} style={styles.s_Title} />
      <Label title={strings.CheckUpcomingLeaves} style={styles.des} />
    </View>
  );
};

export default DashboardLayout;
