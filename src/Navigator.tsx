import React, {FC, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {scale} from 'react-native-size-matters';
import {useSelector, useDispatch} from 'react-redux';
import {StorageKey, Storage} from '@Util';
import {Loader} from '@CommonComponent';
import {setUserCredential} from '@src/Redux/Action/loginReducer';
import {AppDispatch, RootState} from '@src/Redux/store';
import Login from '@src/BeforeLogin/Login';
import {
  Dashboard,
  CustomDrawerContent,
  GeneralDashboard,
  ChangePassword,
  ApplyLeave,
  LeaveSummary,
  LeaveAdjustment,
  LeaveHistory,
  UpComingViewAll,
  ViewPublicHolidayLayout,
} from '@src/AfterLogin';

const beforeLoginStack = createNativeStackNavigator();
const afterDrawerLoginStack = createDrawerNavigator();

interface beforeStackProps {}

const BeforeStack: FC<beforeStackProps> = () => {
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

interface afterStackProps {}

const AfterLoginStack: FC<afterStackProps> = () => {
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

interface dataProps {
  userId: string;
  showLoader: boolean;
}

const Navigator: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mUserData = useSelector((state: RootState) => state.loginReducer);

  const [data, setData] = useState<dataProps>({
    userId: '',
    showLoader: true,
  });

  useEffect(() => {
    Storage.getData(StorageKey.UserData).then(res => {
      if (res) {
        let mdata = JSON.parse(res);
        dispatch(setUserCredential({...mdata, userId: '1'}));
        setData({...data, userId: '1', showLoader: false});
      } else {
        setData({...data, showLoader: false});
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (mUserData?.userId) {
      setData({...data, userId: mUserData?.userId});
    } else {
      setData({...data, userId: ''});
    }
  }, [mUserData?.userId]);

  return (
    <>
      {data?.showLoader ? (
        <Loader Visible={data?.showLoader} />
      ) : data?.userId ? (
        <AfterLoginStack />
      ) : (
        <BeforeStack />
      )}
    </>
  );
};

export default Navigator;
