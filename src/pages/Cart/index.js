import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {

  handleRemoveProduct = id => {
    removeFromCart(id);
  }

  handleIncrement = product => {
    updateAmountRequest(product.id, product.amount + 1);
  }

  handleDecrement = product => {
    updateAmountRequest(product.id, product.amount - 1);
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
            remove={() => this.handleRemoveProduct(item.id)}
            increment={() => this.handleIncrement(item)}
            decrement={() => this.handleDecrement(item)}
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

const mapStateToProps = state => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotal: formatPrice(product.amount * product.price)
  })),
  total: formatPrice(state.cart.reduce((total, product) => {
    return total + (product.price * product.amount);
  }, 0))
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
