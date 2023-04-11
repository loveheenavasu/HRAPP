import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import SplashScreen from './src/BeforeLogin/Splash';
import Navigator from './src/Navigator';

const App = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
      console.log('------123--->', 123);
    }, 1500);
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      {showSplash ? <SplashScreen /> : <Navigator />}
    </SafeAreaView>
  );
};

export default App;
