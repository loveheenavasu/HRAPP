import React, {FC, useEffect, useRef, useState} from 'react';
import {
  View,
  DeviceEventEmitter,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLOR} from '@Util';
import {Label} from '@CommonComponent';
import styles from './styles';
import strings from '@src/Language/strings';

let timeOut: any = null;

const Toast: FC = () => {
  const {height: windowHeight} = Dimensions.get('screen');
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;
  const [status, setStatus] = useState<string>('');
  const [msg, setMessage] = useState<string>('');

  useEffect(() => {
    DeviceEventEmitter.addListener('SHOW_TOAST', onNewToast);
    return () => {
      DeviceEventEmitter.removeAllListeners();
      clearTimeout(timeOut);
    };
  }, []);
  const onNewToast = (data: any) => {
    clearTimeout(timeOut);
    setStatus(data?.type);
    setMessage(data?.options);
    popIn();
  };

  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: verticalScale(50),
      duration: 1300,
      useNativeDriver: true,
    }).start(popOut());
  };

  const popOut = () => {
    timeOut = setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }, 5000);
  };

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * -1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.toast_Con,
        {
          transform: [{translateY: popAnim}],
        },
      ]}>
      <View style={styles.toastRow}>
        <AntDesign
          name={status === 'success' ? 'checkcircleo' : 'closecircleo'}
          size={scale(25)}
          color={status === 'success' ? COLOR.WHITE : COLOR.RED}
        />
        <View style={styles.toastText}>
          <Label
            style={styles.title}
            title={
              status === 'success' ? `${strings.Success}` : `${strings.Failed}`
            }
          />
          <Label style={styles.msg_Label} title={msg} />
        </View>
        <TouchableOpacity onPress={() => instantPopOut()}>
          <Entypo name="cross" size={24} color={COLOR.WHITE} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Toast;
