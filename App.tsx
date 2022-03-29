import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Stack/AppStack';
import Tts from 'react-native-tts';
import {Provider} from 'react-redux';
import store from './src/Redux/store/store';
import Main from './Main';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
