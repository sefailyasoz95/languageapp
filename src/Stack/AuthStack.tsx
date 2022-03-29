import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import OnBoardingScreen from '../Screens/Auth/OnBoardingScreen';
import RegisterScreen from '../Screens/Auth/RegisterScreen';
import LoginScreen from '../Screens/Auth/LoginScreen';
import AuthScreen from '../Screens/Auth/AuthScreen';
import COLORS from '../Constants/COLORS';

const Auth = createSharedElementStackNavigator();
const screenOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: COLORS.background,
  },
};
const AuthStack = () => {
  return (
    <Auth.Navigator screenOptions={screenOptions}>
      <Auth.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Auth.Screen name="AuthScreen" component={AuthScreen} />
      <Auth.Screen name="RegisterScreen" component={RegisterScreen} />
      <Auth.Screen name="LoginScreen" component={LoginScreen} />
    </Auth.Navigator>
  );
};

export default AuthStack;
