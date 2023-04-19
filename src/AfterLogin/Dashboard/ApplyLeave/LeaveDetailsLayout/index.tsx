import React from 'react';
import {StyleSheet, View} from 'react-native';
import COLOR from '../../../../Util/Color';
import {scale, verticalScale} from 'react-native-size-matters';
import Label from '../../../../CommonComponent/Lable';

interface Props {
  list?: string[];
}

const LeaveDetailsLayout = ({list}: Props) => {
  console.log('-LeaveDetailsLayout--list----->', list);

  return (
    <View style={styles.main}>
      <Label title="Leave Details" style={styles.title_Label} />

      {list?.length > 0 && (
        <>
          {list?.map(item => {
            return <Label title="mith" />;
          })}
        </>
      )}

      {/* {list?.map((item: any) => {
        return <Label title="mith" />;
      })} */}
      {/* {list?.map((item, index) => (
        <View
          style={{
            width: '100%',
            height: verticalScale(45),
            flexDirection: 'row',
            borderBottomColor: COLOR.GREY,
            borderBottomWidth: scale(0.6),
          }}>
          <View
            style={{
              width: '35%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Label title="mith" />
          </View>
        </View>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLOR.WHITE,
    width: '100%',
    maxHeight: verticalScale(500),
    marginVertical: verticalScale(3),
    borderRadius: scale(6),
    paddingHorizontal: scale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    paddingBottom: scale(10),
    paddingTop: scale(2),
  },
  title_Label: {
    marginVertical: scale(5),
    marginLeft: scale(1),
  },
});

export default React.memo(LeaveDetailsLayout);
