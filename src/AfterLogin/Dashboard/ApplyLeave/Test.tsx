import React from 'react';
import {View} from 'react-native';
import Label from '../../../CommonComponent/Lable';

const Test = () => {
  console.log('---Test----->', 123);

  return (
    <View>
      <Label title="mith" />
    </View>
  );
};

export default React.memo(Test);
