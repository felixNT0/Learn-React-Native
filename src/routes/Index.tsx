import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import navigationString from '../navigations/navigationString';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';

// import navigationString from '../navigations/navigationString';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={WelcomeScreen} name={navigationString.HOME} />
        <Stack.Screen
          component={SignUpScreen}
          name={navigationString.SIGN_UP}
        />
        <Stack.Screen component={LoginScreen} name={navigationString.SIGN_IN} />
        {/* <Stack.Screen
          component={EditContact}
          name={navigationString.EDIT_CONTACT}
        />
        <Stack.Screen
          component={DeletedContacts}
          name={navigationString.DELETED_CONTACT}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
