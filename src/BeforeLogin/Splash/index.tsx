import React, {useRef, useEffect, FC,RefObject} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Lottie from 'lottie-react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import COLOR from '../../Util/Color';

const SplashScreen :FC= () => {
  const lottieRef: RefObject<Lottie> = useRef(null);

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

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    fontSize: scale(17),
    color: COLOR.PRIMARY,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: verticalScale(40),
  },
  button_Con: {
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: verticalScale(30),
  },
});

export default SplashScreen;
