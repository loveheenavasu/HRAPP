import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import COLOR from '../../Util/Color';

const Loader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 99999,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={'large'} color={COLOR.PRIMARY} />
    </View>
  );
};
export default Loader;