import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import styles from './styles';
import EventCard from './EventCard';
import Label from '../../CommonComponent/Lable';
import {
  Arr,
  celebrationArr,
  pubHoliArr,
  NewHireArr,
} from '../../Util/DummyData';
import Header from '../../CommonComponent/Header';
import COLOR from '../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';
import UpcomingLeave from './UpComingLeave';
import UpcomingPublicHolidays from './UpComingPublicHolidayes';
import CelebrationLayout from './CelebrartionLayout';
import CompanyLinkLayout from './CompanyLinkLayout';
import NewHiresLayout from './NewHiresLayout';
import HappinesLayout from './HappinessLayout';
const GeneralDashboard = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={verticalScale(45)}>
      <Header title="General Dashboard" />
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: COLOR.GREY, flex: 1}}
        contentContainerStyle={{
          paddingBottom: verticalScale(100),
          flexGrow: 1,
        }}>
        <View style={{width: '94%', marginHorizontal: '3%'}}>
          <UpcomingLeave list={Arr} />
          <UpcomingPublicHolidays public_Holiday_List={pubHoliArr} />
          <CelebrationLayout list={celebrationArr} />
          <CompanyLinkLayout />
          <NewHiresLayout list={NewHireArr} />
          <HappinesLayout />
          {/* <EventCard
            upcomingLeave
            leaveArr={Arr}
            publicHolidayArr={pubHoliArr}
          />
          <EventCard celebration celebrationArr={celebrationArr} />
          <EventCard companyLinks companyLinkArr={[]} />
          <EventCard newHire newHireArr={NewHireArr} />
          <EventCard happines /> */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default GeneralDashboard;
