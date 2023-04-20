import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  Arr,
  celebrationArr,
  pubHoliArr,
  NewHireArr,
} from '../../Util/DummyData';
import Header from '../../CommonComponent/Header';
import COLOR from '../../Util/Color';
import {verticalScale} from 'react-native-size-matters';
import UpcomingLeave from './UpComingLeave';
import UpcomingPublicHolidays from './UpComingPublicHolidayes';
import CelebrationLayout from './CelebrartionLayout';
import CompanyLinkLayout from './CompanyLinkLayout';
import NewHiresLayout from './NewHiresLayout';
import HappinesLayout from './HappinessLayout';
import {useEffect, useRef, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import AddCompanyLinkModal from './Modal/AddCompanyLink';
const GeneralDashboard = () => {
  const isFocused = useIsFocused();
  const scrollRef = useRef('');

  const [showAddLinkModal, setShowAddLinkModal] = useState<boolean>(false);

  useEffect(() => {
    scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
  }, [isFocused]);

  return (
    <KeyboardAvoidingView
      style={styles.main}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={verticalScale(45)}>
      <Header title="General Dashboard" />
      <ScrollView
        ref={scrollRef}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={styles.scroll_Con}
        contentContainerStyle={styles.content_Con}>
        <View style={styles.sub_Main}>
          <UpcomingLeave list={Arr} />
          <UpcomingPublicHolidays public_Holiday_List={pubHoliArr} />
          <CelebrationLayout list={celebrationArr} />
          <CompanyLinkLayout
            onClickAdd={() => setShowAddLinkModal(!showAddLinkModal)}
          />
          <NewHiresLayout list={NewHireArr} />
          <HappinesLayout />
          {showAddLinkModal && (
            <AddCompanyLinkModal
              showModal={showAddLinkModal}
              onClickCancel={() => setShowAddLinkModal(false)}
              onClickSubmit={() => {
                Keyboard.dismiss();
                setShowAddLinkModal(false);
              }}
            />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content_Con: {
    paddingBottom: verticalScale(100),
    flexGrow: 1,
  },
  sub_Main: {
    width: '94%',
    marginHorizontal: '3%',
  },
  scroll_Con: {
    backgroundColor: COLOR.GREY,
    flex: 1,
  },
});

export default GeneralDashboard;
