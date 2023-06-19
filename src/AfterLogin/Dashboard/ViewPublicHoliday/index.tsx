import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import Calender from 'react-native-vector-icons/AntDesign';
import {scale} from 'react-native-size-matters';
import {useRoute} from '@react-navigation/native';
import {Header, Label} from '@CommonComponent';
import {COLOR} from '@Util';
import styles from './styles';
import strings from '@src/Language/strings';

const ViewPublicHolidayLayout = () => {
  const mRoute = useRoute();
  return (
    <>
      <Header showBackButton={true} title={strings?.NextPublic_Holiday} />
      <View style={styles.sub_main}>
        <FlatList
          data={mRoute?.params?.list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.rowView} onPress={() => null}>
                <Calender
                  name="calendar"
                  size={scale(30)}
                  color={COLOR.LIGHT_GREY}
                />
                <View style={styles.list_Sub_Child}>
                  <Label title={item?.name} style={styles.date_Label} />
                  <Label title={item?.on} style={styles.day_Label} />
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

export default ViewPublicHolidayLayout;
