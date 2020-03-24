import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';

import Routes from './routes';

function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
