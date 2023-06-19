import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Header, Label} from '@CommonComponent';
import {COLOR} from '@Util';
import Calender from 'react-native-vector-icons/AntDesign';
import {scale} from 'react-native-size-matters';
import {useRoute} from '@react-navigation/native';
import styles from './styles';
import strings from '@src/Language/strings';

const ViewAllLayout = () => {
  const mRoute = useRoute();
  return (
    <>
      <Header showBackButton={true} title={strings?.UpcomingLeave} />
      <View style={styles.sub_main}>
        <FlatList
          data={mRoute?.params?.list}
          keyExtractor={index => index.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.rowView} onPress={() => null}>
                <Calender
                  name="calendar"
                  size={scale(30)}
                  color={COLOR.LIGHT_GREY}
                />
                <View style={styles.list_Sub_Child}>
                  <Label title={item?.date} style={styles.date_Label} />
                  <Label title={item?.day} style={styles.day_Label} />
                </View>
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={() => (
            <View style={styles.empty_Con}>
              <Label
                style={styles.not_Found_Label}
                title={strings?.DataNot_Found}
              />
            </View>
          )}
        />
      </View>
    </>
  );
};

export default ViewAllLayout;
