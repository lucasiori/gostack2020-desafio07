import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Badge } from './styles';

import rocketshoes from '../../assets/images/rocketshoes.png';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Image source={rocketshoes} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={26} />
        <Badge>{cartSize}</Badge>
      </TouchableOpacity>
    </Container>
  );
}
