import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Badge } from './styles';

import rocketshoes from '../../assets/images/rocketshoes.png';

function Header({ navigation, cartSize }) {
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

export default connect(state => ({
  cartSize: state.cart.length
}))(Header);
