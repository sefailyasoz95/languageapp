import React from 'react';
import {Easing} from 'react-native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import CategoryListScreen from '../Screens/App/CategoryListScreen';
import DetailScreen from '../Screens/App/DetailScreen';
import HomeScreen from '../Screens/App/HomeScreen';

interface Props {}
const App = createSharedElementStackNavigator();
const AppStack = (props: Props) => {
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      <App.Screen name="Home" component={HomeScreen} />
      <App.Screen name="Detail" component={DetailScreen} />
      <App.Screen
        name="CategoryList"
        component={CategoryListScreen}
        options={{
          gestureEnabled: false,
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {duration: 300, easing: Easing.ease},
            },
            close: {
              animation: 'timing',
              config: {duration: 300, easing: Easing.ease},
            },
          },
        }}
        sharedElements={route => {
          const {category} = route.params;
          return [
            {
              id: `${category.id}.${category.categoryNameEN}`,
            },
          ];
        }}
      />
    </App.Navigator>
  );
};

export default AppStack;
