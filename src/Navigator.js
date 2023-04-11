import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './BeforeLogin/Login';
import Dashboard from './AfterLogin/Dashboard';
import * as Storage from './Service/Storage';
import {UserId} from './Util/StorageKey';
import CustomDrawerContent from './AfterLogin/CustomDrawer';
import {scale} from 'react-native-size-matters';
import Loader from './CommonComponent/Loader';

const beforeLoginStack = createNativeStackNavigator();
const afterDrawerLoginStack = createDrawerNavigator();

const BeforeStack = () => {
  return (
    <NavigationContainer>
      <beforeLoginStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <beforeLoginStack.Screen component={Login} name="login" />
      </beforeLoginStack.Navigator>
    </NavigationContainer>
  );
};

const AfterLoginStack = () => {
  return (
    <NavigationContainer>
      <afterDrawerLoginStack.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            width: scale(220),
          },
          drawerType: 'front',
          headerShown: false,
        }}>
        <afterDrawerLoginStack.Screen component={Dashboard} name="Dashboard" />
      </afterDrawerLoginStack.Navigator>
    </NavigationContainer>
  );
};

const Navigator = () => {
  const [userId, setUserId] = useState('');
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    Storage.getData(UserId).then(res => {
      setUserId(res);
      setShowLoader(false);
    });
  }, []);

  return (
    <>
      {showLoader ? <Loader /> : userId ? <AfterLoginStack /> : <BeforeStack />}
    </>
  );
};

export default Navigator;
