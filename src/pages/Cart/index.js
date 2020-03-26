import React from 'react';

import CartItem from '../../components/CartItem';

import {
  Container,
  ItemsList,
  OrderInfo,
  TotalText,
  OrderPrice,
  SubmitButton,
  SubmitButtonText
} from './styles';

export default function Cart() {
  return (
    <Container>
      <ItemsList
        data={['1']}
        keyExtractor={item => item}
        renderItem={(item) => <CartItem />}
      />

      <OrderInfo>
        <TotalText>TOTAL</TotalText>
        <OrderPrice>R$ 1619,10</OrderPrice>
      </OrderInfo>

      <SubmitButton>
        <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}
