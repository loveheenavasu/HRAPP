import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as Storage from './Service/Storage';
import {StorageKey} from '@Util';

import Login from './BeforeLogin/Login';
import Dashboard from './AfterLogin/Dashboard';
import CustomDrawerContent from './AfterLogin/CustomDrawer';
import {scale} from 'react-native-size-matters';
import Loader from './CommonComponent/Loader';
import {useSelector, useDispatch} from 'react-redux';
import {setUserCredential} from './Redux/Action/loginReducer';
import GeneralDashboard from './AfterLogin/GeneralDashborad';
import ChangePassword from './AfterLogin/ChangePassword';
import ApplyLeave from './AfterLogin/Dashboard/ApplyLeave';
import LeaveSummary from './AfterLogin/Dashboard/LeaveSummary';
import LeaveAdjustment from './AfterLogin/Dashboard/LeaveAdjustment';
import LeaveHistory from './AfterLogin/Dashboard/LeaveHistory';
import UpComingViewAll from './AfterLogin/Dashboard/UpComingLeaveLayout/UpComingViewAll';
import ViewPublicHolidayLayout from './AfterLogin/Dashboard/ViewPublicHoliday';

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
        <afterDrawerLoginStack.Screen
          component={ChangePassword}
          name="ChangePassword"
        />
        <afterDrawerLoginStack.Screen
          component={ApplyLeave}
          name="ApplyLeave"
        />
        <afterDrawerLoginStack.Screen
          component={LeaveSummary}
          name="LeaveSummary"
        />
        <afterDrawerLoginStack.Screen
          component={LeaveAdjustment}
          name="LeaveAdjustment"
        />
        <afterDrawerLoginStack.Screen
          component={LeaveHistory}
          name="LeaveHistory"
        />
        <afterDrawerLoginStack.Screen
          component={UpComingViewAll}
          name="UpComingViewAll"
        />
        <afterDrawerLoginStack.Screen
          component={ViewPublicHolidayLayout}
          name="ViewPublicHolidayLayout"
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
    Storage.getData(StorageKey.UserData).then(res => {
      let mdata = JSON.parse(res);
      if (res) {
        dispatch(setUserCredential({...mdata, userId: '1'}));
        setUserId('1');
        setShowLoader(false);
      } else {
        setShowLoader(false);
      }
    });
  }, [dispatch]);

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
