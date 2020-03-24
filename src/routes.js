import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
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
