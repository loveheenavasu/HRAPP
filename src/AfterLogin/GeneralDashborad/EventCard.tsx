import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import COLOR from '../../Util/Color';
import Label from '../../CommonComponent/Lable';
import {scale, verticalScale} from 'react-native-size-matters';
import Calender from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/EvilIcons';
import Attach from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../CommonComponent/CustomButton';

interface Props {
  upcomingLeave?: boolean;
  leaveArr?: object[];
  publicHolidayArr?: object[];
  celebration?: boolean;
  celebrationArr?: object[];
  companyLinks?: boolean;
  companyLinkArr?: object[];
  newHire?: boolean;
  newHireArr?: object[];
}

const EventCard = (props: Props) => {
  const {
    upcomingLeave,
    leaveArr,
    publicHolidayArr,
    celebration,
    celebrationArr,
    companyLinks,
    companyLinkArr,
    newHire,
    newHireArr,
  } = props;
  return (
    <View style={styles.maincard}>
      {/*Upcoming Leaves Info Card*/}
      {upcomingLeave && (
        <>
          <Label title="Upcoming Leaves" style={styles.heading} />
          {leaveArr?.length ? (
            <FlatList
              data={leaveArr}
              keyExtractor={item => item?.id}
              renderItem={({item}) => {
                return <Label title={item?.leave} style={styles.leaveTxt} />;
              }}
            />
          ) : (
            <Label title="No Upcoming Leaves" style={styles.leaveTxt} />
          )}

          <Label title="Upcoming Public Holiday" style={styles.heading} />
          {publicHolidayArr?.length ? (
            <FlatList
              data={publicHolidayArr}
              keyExtractor={item => item?.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={styles.rowView} onPress={() => null}>
                    <Calender name="calendar" size={50} />
                    <View style={styles.coloumView}>
                      <Label title={item?.holiday} style={styles.blackTxt} />
                      <Label title={item?.date} style={styles.blackTxt} />
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          ) : (
            <Label title="No Upcoming Public Holiday" style={styles.leaveTxt} />
          )}
        </>
      )}

      {/*Celebration Info Card*/}
      {celebration && (
        <>
          <Label title="Celebrations" style={styles.heading} />
          {celebrationArr?.length ? (
            <FlatList
              data={celebrationArr}
              keyExtractor={item => item?.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={styles.rowView} onPress={() => null}>
                    <User name="user" size={100} style={styles.userImg} />
                    <View
                      style={[
                        styles.coloumView,
                        {
                          marginLeft: scale(15),
                          borderLeftWidth: 2,
                          borderLeftColor: COLOR.NAVY,
                          paddingLeft: scale(20),
                        },
                      ]}>
                      <Label title={item?.date} style={styles.blackTxt} />
                      <Label title={item?.name} style={styles.greyTxt} />
                      <Label title={item?.event} style={styles.greyTxt} />
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          ) : (
            <Label title="No Celebration" style={styles.leaveTxt} />
          )}
        </>
      )}

      {/*CompanyLinks Info Card*/}
      {companyLinks && (
        <>
          <Label title="Company Links" style={styles.heading} />
          {!companyLinkArr?.length ? (
            <>
              <TouchableOpacity>
                <Attach
                  name="document-attach-sharp"
                  size={100}
                  color={COLOR.NAVY}
                  style={styles.attachImg}
                />
              </TouchableOpacity>
              <Label title="No Links available" style={styles.leaveTxt} />
              <Label
                title="Why Dont you add some links today?"
                style={styles.leaveTxt}
              />
              <View style={[styles.rowView, {justifyContent: 'space-around'}]}>
                <CustomButton
                  name="Add"
                  btnStyle={styles.Btn}
                  addLogo
                  txtStyle={{marginLeft: scale(11)}}
                />
                <CustomButton
                  name="Edit"
                  btnStyle={{
                    backgroundColor: COLOR.NAVY,
                    width: '30%',
                  }}
                />
              </View>
            </>
          ) : (
            <Text>Links will come here</Text>
          )}
        </>
      )}

      {/*New Hire Info Card*/}
      {newHire && (
        <>
          <Label title="New Hires" style={styles.heading} />
          {newHireArr?.length ? <></> : <></>}
        </>
      )}
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  maincard: {
    backgroundColor: COLOR.WHITE,
    marginTop: verticalScale(10),
  },
  heading: {
    fontSize: scale(16),
    textAlign: 'center',
    color: COLOR.NAVY,
    fontWeight: '600',
  },
  leaveTxt: {
    fontSize: scale(12),
    textAlign: 'center',
    fontWeight: '600',
  },
  blackTxt: {
    marginVertical: verticalScale(1),
    fontSize: scale(12),
    fontWeight: '600',
  },
  greyTxt: {
    marginVertical: verticalScale(1),
    fontSize: scale(12),
    fontWeight: '400',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: scale(5),
    marginVertical: verticalScale(5),
  },
  coloumView: {
    paddingLeft: scale(11),
  },
  userImg: {
    height: 100,
  },
  attachImg: {
    alignSelf: 'center',
  },
  Btn: {
    backgroundColor: COLOR.NAVY,
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: scale(7),
  },
});
