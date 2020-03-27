import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Main from './pages/Main';
import Cart from './pages/Cart';

const { Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <Navigator screenOptions={{
      cardStyle: { backgroundColor: '#191920' },
      header: navigation => (<Header {...navigation} />)
    }}>
      <Screen
        name="Main"
        component={Main}
        options={{ title: 'Home Page' }}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{ title: 'Carrinho de Compras' }}
      />
    </Navigator>
  );
}
