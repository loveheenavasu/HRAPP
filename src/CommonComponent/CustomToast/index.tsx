import {
  StyleSheet,
  View,
  DeviceEventEmitter,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {scale, verticalScale} from 'react-native-size-matters';
import Label from '../Lable';
import COLOR from '../../Util/Color';
import english from '../../Language/English';

let timeOut: any = null;

const Toast = () => {
  const {height: windowHeight} = Dimensions.get('screen');
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;
  const successHeader = 'Success!';
  const failHeader = 'Failed!';
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
            title={status === 'success' ? `${english.Success}` :`${english.Failed}`}
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
const styles = StyleSheet.create({
  toast_Con: {
    width: '90%',
    marginHorizontal: '5%',
    height: verticalScale(60),
    backgroundColor: COLOR.PRIMARY,
    zIndex: 99999,
    borderRadius: scale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    top: 0,
  },
  toastRow: {
    width: '90%',
    height: '100%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  toastText: {
    width: '70%',
    padding: 2,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: scale(2),
    color: COLOR.WHITE,
    opacity: 0.8,
  },
  msg_Label: {
    marginVertical: 0,
    color: COLOR.WHITE,
  },
});

export default Toast;
