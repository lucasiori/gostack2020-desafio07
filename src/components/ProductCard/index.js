import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../utils/format';

import {
  Container,
  ProductImage,
  Description,
  Price,
  AddButton,
  CartAmount,
  CartAmountText,
  AddButtonText,
} from './styles';

export default function ProductCard({ product }) {
  return (
    <Container>
      <ProductImage source={{ uri: product.image }} alt={product.title} />
      <Description>{product.title}</Description>
      <Price>
      {formatPrice(product.price)}
      </Price>
      <AddButton>
        <CartAmount>
          <Icon name="add-shopping-cart" color="#FFF" size={20} />
          <CartAmountText>5</CartAmountText>
        </CartAmount>

        <AddButtonText>ADICIONAR</AddButtonText>
      </AddButton>
    </Container>
  );
}
