import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Label from '../../../CommonComponent/Lable';

interface Props {
  onClick?: () => void;
}

const Test = ({onClick}: Props) => {
  console.log('---Test----->', 123);

  return (
    <TouchableOpacity onPress={onClick}>
      <Label title="mith" />
    </TouchableOpacity>
  );
};

export default React.memo(Test);
