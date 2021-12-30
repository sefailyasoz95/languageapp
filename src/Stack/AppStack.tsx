import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HomeScreen from '../Screens/App/HomeScreen';

interface Props {}
const App = createSharedElementStackNavigator();
const AppStack = (props: Props) => {
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      <App.Screen name="HomeScreen" component={HomeScreen} />
    </App.Navigator>
  );
};

export default AppStack;
