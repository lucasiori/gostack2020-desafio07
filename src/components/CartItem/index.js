import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  DeleteButton,
  Container,
  ProductImage,
  ProductInfo,
  Description,
  Price,
  Footer,
  Controls,
  ProductAmount,
  ProductTotal
} from './styles';

export default function CartItem({ product, remove, increment, decrement }) {
  return (
    <Wrapper>
      <DeleteButton onPress={remove}>
        <Icon name="delete-forever" size={30} color="#7159c1" />
      </DeleteButton>

      <Container>
        <ProductImage source={{ uri: product.image }} alt={product.title} />

        <ProductInfo>
          <Description>{product.title}</Description>
          <Price>{product.formattedPrice}</Price>
        </ProductInfo>
      </Container>

      <Footer>
        <Controls>
          <TouchableOpacity onPress={decrement}>
            <Icon name="remove-circle-outline" size={24} color="#7159c1" />
          </TouchableOpacity>
          <ProductAmount editable={false} value={product.amount.toString()}></ProductAmount>
          <TouchableOpacity onPress={increment}>
            <Icon name="add-circle-outline" size={20} color="#7159c1" />
          </TouchableOpacity>
        </Controls>

        <ProductTotal>{product.subTotal}</ProductTotal>
      </Footer>
    </Wrapper>
  );
}
