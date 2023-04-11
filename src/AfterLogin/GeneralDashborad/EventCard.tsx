import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import COLOR from '../../Util/Color';
import Label from '../../CommonComponent/Lable';
import {scale, verticalScale} from 'react-native-size-matters';
import Calender from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/EvilIcons';
import Attach from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../CommonComponent/CustomButton';
import NoHire from 'react-native-vector-icons/AntDesign';
import ThumbUp from 'react-native-vector-icons/FontAwesome';
import Chat from 'react-native-vector-icons/Ionicons';
import EditText from '../../CommonComponent/EditText';
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
  happines?: boolean;
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
    happines,
  } = props;

  const _Hline = () => {
    return <View style={styles.hLine}></View>;
  };

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
                    <Calender name="calendar" size={30} />
                    <View style={styles.coloumView}>
                      <Label title={item?.holiday} style={styles.blackTxt} />
                      <Label title={item?.date} style={styles.blackTxt} />
                    </View>
                  </TouchableOpacity>
                );
              }}
              ItemSeparatorComponent={_Hline}
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
                    <User name="user" size={50} style={styles.userImg} />
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
              ItemSeparatorComponent={_Hline}
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
                  size={50}
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
                    width: '25%',
                    paddingVertical: verticalScale(7),
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
          {newHireArr?.length ? (
            <>
              <FlatList
                data={newHireArr}
                keyExtractor={item => item?.id}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={styles.rowView}
                      onPress={() => null}>
                      <User name="user" size={50} style={styles.userImg} />
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
                        <Label title={item?.name} style={styles.blackTxt} />
                        <Label title={item?.dept} style={styles.greyTxt} />
                        <Label title={item?.date} style={styles.greyTxt} />
                      </View>
                    </TouchableOpacity>
                  );
                }}
                ItemSeparatorComponent={_Hline}
              />
            </>
          ) : (
            <>
              <NoHire
                name="contacts"
                size={90}
                color={COLOR.NAVY}
                style={styles.noHireImg}
              />
              <Label title="Aww...No New hires today" style={styles.hireTxt} />
            </>
          )}
        </>
      )}
      {/*Happiness*/}

      {happines && (
        <>
          <Label title="Happiness" style={styles.heading} />
          <Label
            title="How are you feeling recently? Tell us"
            style={styles.leaveTxt}
          />
          <View style={[styles.rowView, {justifyContent: 'space-around'}]}>
            <TouchableOpacity>
              <ThumbUp name="thumbs-up" size={30} color={COLOR.GREEN} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ThumbUp name="thumbs-down" size={30} color={COLOR.RED} />
            </TouchableOpacity>
          </View>
          <View style={styles.hLine}></View>
          <View style={styles.rowView}>
            <Chat name="chatbubbles-sharp" size={30} color={COLOR.NAVY} />
            <Label
              title="Hmm.. What are you thinking?"
              style={styles.chatTxt}
            />
          </View>
          <EditText
            Placholder="Enter your thoughts"
            outerBoxStyle={{marginTop: verticalScale(5)}}
          />
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
    fontSize: scale(14),
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
    height: 60,
  },
  attachImg: {
    alignSelf: 'center',
  },
  Btn: {
    backgroundColor: COLOR.NAVY,
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: scale(7),
    paddingVertical: verticalScale(7),
  },
  noHireImg: {
    alignSelf: 'center',
  },
  hireTxt: {
    textAlign: 'center',
    fontSize: scale(15),
    color: COLOR.BLACK,
    fontWeight: '600',
  },
  hLine: {
    height: scale(1),
    width: '95%',
    backgroundColor: COLOR.GREY,
    alignSelf: 'center',
    marginTop: verticalScale(2),
  },
  chatTxt: {
    marginLeft: scale(7),
  },
});
