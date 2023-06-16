import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import Gift from 'react-native-vector-icons/AntDesign';
import {scale} from 'react-native-size-matters';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Label, CustomButton} from '@CommonComponent';
import {COLOR} from '@Util';
import styles from './styles';
import strings from '@src/Language/strings';

interface listItem {
  id: number;
  name: string;
  on: string;
}

interface Props {
  list?: listItem[];
}

interface navigationProps {
  ViewPublicHolidayLayout: {
    list?: listItem[];
  };
}

const PublicHolidayLayout: FC<Props> = ({list}) => {
  const navigation = useNavigation<NavigationProp<navigationProps>>();

  return (
    <View style={styles.main}>
      <View style={styles.header_Con}>
        <Label title={strings.NEXTPUBLIC_HOLIDAY} style={styles.s_Title} />
        <Gift name="gift" size={scale(23)} color={COLOR.LIGHT_GREY} />
      </View>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <>
              <Label title={item?.name} style={styles.pubHolTxt} />
              <Label title={`On ${item?.on}`} style={styles.normalTxt} />
              <CustomButton
                onPress={() =>
                  navigation.navigate('ViewPublicHolidayLayout', {list: list})
                }
                name={strings.ViewPublic_Holiday}
                btnStyle={styles.btn}
              />
            </>
          );
        }}
      />
    </View>
  );
};

export default PublicHolidayLayout;
