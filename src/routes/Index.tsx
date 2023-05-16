import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import navigationString from '../navigations/navigationString';
import CreatePlanScreen from '../screens/CreatePlan/CreatePlanScreen';
import FundPlanScreen from '../screens/FundPlan/FundPlanScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import ResetPasswordScreen from '../screens/ResetPassword/ResetPasswordScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';

// import navigationString from '../navigations/navigationString';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName={navigationString.HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen component={WelcomeScreen} name={navigationString.HOME} />
      <Stack.Screen component={SignUpScreen} name={navigationString.SIGN_UP} />
      <Stack.Screen component={LoginScreen} name={navigationString.SIGN_IN} />
      <Stack.Screen
        component={HomeScreen}
        name={navigationString.HOME_SCREEN}
      />
      <Stack.Screen
        component={ResetPasswordScreen}
        name={navigationString.RESET_PASSWORD}
      />
      <Stack.Screen
        component={CreatePlanScreen}
        name={navigationString.CREATE_A_PLAN}
      />
      <Stack.Screen
        component={FundPlanScreen}
        name={navigationString.FUND_PLAN}
      />
    </Stack.Navigator>
  );
}

export default Routes;
