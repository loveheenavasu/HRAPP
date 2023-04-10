import { View, StyleSheet, Text } from 'react-native'
import { useRef, useEffect } from 'react'
import Lottie from 'lottie-react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import COLOR from '../../Util/Color';
import CustomButton from '../../CommonComponent/CustomButton';

const SplashScreen = () => {
  const lottieRef = useRef('')

  const _finish = () => {
    lottieRef.current.pause();
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
      <CustomButton
        name='Login'
        btnStyle={{ marginBottom: verticalScale(30) }}
      />
    </>
  )


}

export default SplashScreen

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    position: 'absolute',
    fontSize: scale(20),
    top: verticalScale(30),
    left: scale(21),
    color: COLOR.GREEN,
    fontWeight: '800'
  },

})