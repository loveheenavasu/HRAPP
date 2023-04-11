import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './BeforeLogin/Login';
import Dashboard from './AfterLogin/Dashboard';
import * as Storage from './Service/Storage';
import {UserData} from './Util/StorageKey';
import CustomDrawerContent from './AfterLogin/CustomDrawer';
import {scale} from 'react-native-size-matters';
import Loader from './CommonComponent/Loader';
import {useSelector, useDispatch} from 'react-redux';
import {setUserCredential} from './Redux/Action/loginReducer';
import GeneralDashboard from './AfterLogin/GeneralDashborad';

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
        <beforeLoginStack.Screen
          component={AfterLoginStack}
          name="AfterLoginStack"
        />
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
        <afterDrawerLoginStack.Screen
          component={GeneralDashboard}
          name="GeneralDashboard"
        />
      </afterDrawerLoginStack.Navigator>
    </NavigationContainer>
  );
};

const Navigator = () => {
  const dispatch = useDispatch();
  const mUserData = useSelector(state => state.loginReducer);
  const [userId, setUserId] = useState('');
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    Storage.getData(UserData).then(res => {
      let mdata = JSON.parse(res);
      if (res) {
        dispatch(setUserCredential({...mdata, userId: '1'}));
        setUserId('1');
        setShowLoader(false);
      } else {
        setShowLoader(false);
      }
    });
  }, []);

  useEffect(() => {
    if (mUserData?.userId) {
      setUserId(mUserData?.userId);
    } else {
      setUserId('');
    }
  }, [mUserData?.userId]);

  return (
    <>
      {showLoader ? <Loader /> : userId ? <AfterLoginStack /> : <BeforeStack />}
    </>
  );
};

export default Navigator;
