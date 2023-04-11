import {ScrollView, View} from 'react-native';
import styles from './styles';
import EventCard from './EventCard';
import Label from '../../CommonComponent/Lable';
import {Arr, celebrationArr, pubHoliArr} from '../../Util/DummyData';
const GeneralDashboard = () => {
  return (
    <ScrollView style={styles.main}>
      <Label title="General Dashboard" style={styles.title} />
      <EventCard upcomingLeave leaveArr={Arr} publicHolidayArr={pubHoliArr} />
      <EventCard celebration celebrationArr={celebrationArr} />
      <EventCard companyLinks companyLinkArr={[]} />
      <EventCard newHire newHireArr={[]} />
    </ScrollView>
  );
};

export default GeneralDashboard;
