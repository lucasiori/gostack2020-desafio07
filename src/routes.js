import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{
      cardStyle: { backgroundColor: '#191920' },
      header: navigation => (<Header {...navigation} />)
    }}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Home Page' }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: 'Carrinho de Compras' }}
      />
    </Stack.Navigator>
  );
}
