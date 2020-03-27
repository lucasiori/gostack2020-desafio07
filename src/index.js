import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import store from './store';
import Navigator from './services/navigation';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={Navigator.navigationRef}>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
