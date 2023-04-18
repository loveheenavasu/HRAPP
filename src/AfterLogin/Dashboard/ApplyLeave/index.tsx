import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../../CommonComponent/Header';
import COLOR from '../../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import LeaveDetailsLayout from './LeaveDetailsLayout';
import Label from '../../../CommonComponent/Lable';
import {LeaveDetailsArr} from '../../../Util/DummyData';
import AddNotifySubmitCard from './AddNotifySubmitCard';
import LeaveBarChat from './LeaveBarChart';

const ApplyLeave = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={verticalScale(45)}>
        <Header showBackButton={true} title="Apply Leave" />
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: COLOR.GREY, flex: 1}}
          contentContainerStyle={{
            paddingBottom: verticalScale(100),
            flexGrow: 1,
          }}>
          <View style={{width: '94%', marginHorizontal: '3%'}}>
            <Label title="Apply Leave" style={styles.title_Txt} />
            <LeaveDetailsLayout leaveDetails={LeaveDetailsArr} />
            <AddNotifySubmitCard />
            <LeaveBarChat/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ApplyLeave;

const styles = StyleSheet.create({
  title_Txt: {
    fontSize: scale(15),
    color: COLOR.DARK_GRAY,
    fontWeight: '600',
  },
});
