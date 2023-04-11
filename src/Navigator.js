import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './BeforeLogin/Login';

const beforeLoginStack = createNativeStackNavigator();

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

const Navigator = () => {
  return (
    <>
      <BeforeStack />
    </>
  );
};

export default Navigator;
