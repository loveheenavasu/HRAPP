import React, {useRef, useEffect} from 'react';
import {View, Text} from 'react-native';
import Lottie from 'lottie-react-native';
import styles from './styles';

const SplashScreen = () => {
  const lottieRef = useRef();

  const _finish = () => {
    lottieRef.current?.pause();
  };

  useEffect(() => {
    let stopAnim = setTimeout(() => {
      _finish();
    }, 60000);
    return () => {
      clearTimeout(stopAnim);
    };
  }, []);

  return (
    <>
      <View style={styles.main}>
        <Text style={styles.title}>Manage your Leaves with HRAPP</Text>
        <Lottie
          ref={lottieRef}
          source={require('../../Assest/LottieJson/Hr1.json')}
          autoPlay
        />
      </View>
    </>
  );
};

export default SplashScreen;
