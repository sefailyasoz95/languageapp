import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './src/Redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from './src/Redux/reducers/reducer';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Stack/AppStack';
import AuthStack from './src/Stack/AuthStack';
import SplashScreen from 'react-native-splash-screen';

const Main = () => {
  const {user, isFetchingUser, isAuthenticated} = useAppSelector(
    state => state.global,
  );
  const dispatch = useAppDispatch();
  const getUser = async () => {
    let response = await AsyncStorage.getItem('user');
    dispatch(setUser(response));
  };
  useEffect(() => {
    getUser();
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Main;
