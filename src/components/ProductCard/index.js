import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function ProductCard({ product, add }) {
  return (
    <Container>
      <ProductImage source={{ uri: product.image }} alt={product.title} />
      <Description>{product.title}</Description>
      <Price>{product.formattedPrice}</Price>
      <AddButton onPress={add}>
        <CartAmount>
          <Icon name="add-shopping-cart" color="#FFF" size={20} />
          <CartAmountText>{product.amount || 0}</CartAmountText>
        </CartAmount>

        <AddButtonText>ADICIONAR</AddButtonText>
      </AddButton>
    </Container>
  );
}
