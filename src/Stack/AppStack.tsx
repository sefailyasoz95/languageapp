import React from 'react';
import {Easing} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import COLORS from '../Constants/COLORS';
import CategoryListScreen from '../Screens/App/CategoryListScreen';
import DetailScreen from '../Screens/App/DetailScreen';
import HomeScreen from '../Screens/App/HomeScreen';

const App = createSharedElementStackNavigator();
const screenOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: COLORS.background,
  },
};
const AppStack = () => {
  return (
    <App.Navigator screenOptions={screenOptions}>
      <App.Screen name="Home" component={HomeScreen} />
      <App.Screen name="Detail" component={DetailScreen} />
      <App.Screen
        name="CategoryList"
        component={CategoryListScreen}
        // options={{
        //   gestureEnabled: false,
        //   cardStyleInterpolator: ({current: {progress}}) => {
        //     return {
        //       cardStyle: {
        //         opacity: progress,
        //       },
        //     };
        //   },
        //   transitionSpec: {
        //     open: {
        //       animation: 'timing',
        //       config: {duration: 300, easing: Easing.ease},
        //     },
        //     close: {
        //       animation: 'timing',
        //       config: {duration: 300, easing: Easing.ease},
        //     },
        //   },
        // }}
        // sharedElements={route => {
        //   const {category} = route.params;
        //   return [
        //     {
        //       id: `${category.id}.${category.categoryNameEN}`,
        //     },
        //   ];
        // }}
      />
    </App.Navigator>
  );
};

export default AppStack;
