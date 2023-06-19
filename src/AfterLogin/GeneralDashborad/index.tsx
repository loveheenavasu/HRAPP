import React, {FC} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import {
  Arr,
  celebrationArr,
  pubHoliArr,
  NewHireArr,
} from '../../Util/DummyData';
import {Header} from '@CommonComponent';
import {verticalScale} from 'react-native-size-matters';
import UpcomingLeave from './UpComingLeave';
import UpcomingPublicHolidays from './UpComingPublicHoliday';
import CelebrationLayout from './CelebrationLayout';
import CompanyLinkLayout from './CompanyLinkLayout';
import NewHiresLayout from './NewHiresLayout';
import HappinesLayout from './HappinessLayout';
import {useEffect, useRef, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import AddCompanyLinkModal from './Modal/AddCompanyLink';
import strings from '@src/Language/strings';
import styles from './styles';

const GeneralDashboard: FC = () => {
  const isFocused = useIsFocused();
  const scrollRef = useRef<ScrollView>(null);
  const [showAddLinkModal, setShowAddLinkModal] = useState<boolean>(false);

  useEffect(() => {
    scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});
  }, [isFocused]);

  return (
    <KeyboardAvoidingView
      style={styles.main}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={verticalScale(45)}>
      <Header title={strings.GeneralDashboard} />
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

export default GeneralDashboard;
