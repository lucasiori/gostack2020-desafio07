import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/Cart/actions';

import CartItem from '../../components/CartItem';

import {
  Container,
  ItemsList,
  OrderInfo,
  TotalText,
  OrderPrice,
  SubmitButton,
  SubmitButtonText,
  EmptyText
} from './styles';

export default function Cart() {
  const cart = useSelector(state => state.cart.map((product) => ({
    ...product,
    subTotal: formatPrice(product.amount * product.price)
  })));

  const total = useSelector(state => formatPrice(state.cart.reduce((totalSum, product) => {
    return totalSum + (product.price * product.amount);
  }, 0)))

  const dispatch = useDispatch();

  handleRemoveProduct = id => {
    dispatch(CartActions.removeFromCart(id));
  }

  handleIncrement = product => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  handleDecrement = product => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  if (cart.length === 0) {
    return (
      <Container>
        <Icon name="remove-shopping-cart" size={64} color="#eee" />
        <EmptyText>Seu carrinho está vazio.</EmptyText>
      </Container>
    );
  }

  return (
    <Container>
      <ItemsList
        data={cart}
        keyExtractor={product => product.id.toString()}
        renderItem={({ item }) =>
          <CartItem
            product={item}
            remove={() => handleRemoveProduct(item.id)}
            increment={() => handleIncrement(item)}
            decrement={() => handleDecrement(item)}
          />
        }
      />

      <OrderInfo>
        <TotalText>TOTAL</TotalText>
        <OrderPrice>{total}</OrderPrice>
      </OrderInfo>

      <SubmitButton>
        <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}
