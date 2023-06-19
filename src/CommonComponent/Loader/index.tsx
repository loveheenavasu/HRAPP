import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {COLOR} from '@Util';
import styles from './styles';

interface Props {
  Visible: boolean;
}

const Loader: FC<Props> = ({Visible}) => {
  return (
    <>
      {Visible && (
        <View style={styles.main}>
          <ActivityIndicator size={'large'} color={COLOR.PRIMARY} />
        </View>
      )}
    </>
  );
};

export default Loader;
