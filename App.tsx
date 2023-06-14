import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SplashScreen from './src/BeforeLogin/Splash';
import Navigator from './src/Navigator';
import {store} from './src/Redux/store';
import {Provider} from 'react-redux';
import Toast from './src/CommonComponent/CustomToast';

const App :FC= () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1500);
  });
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.main}>
        {showSplash ? <SplashScreen /> : <Navigator />}
        <Toast />
      </SafeAreaView>
    </Provider>
  );
};
const styles = StyleSheet.create({
  main: {flex: 1},
});
export default App;
