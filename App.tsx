import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SplashScreen from './src/BeforeLogin/Splash';
import Navigator from './src/Navigator';
import Toast from 'react-native-toast-message';
const App = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1500);
  });
  return (
    <SafeAreaView style={styles.main}>
      {showSplash ? <SplashScreen /> : <Navigator />}
      <Toast />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1},
});
export default App;
