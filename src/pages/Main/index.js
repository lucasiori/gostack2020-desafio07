import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/Cart/actions';

import ProductCard from '../../components/ProductCard';

import { Container, ItemsList } from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state => state.cart.reduce((amountSum, product) => {
    amountSum[product.id] = product.amount;

    return amountSum;
  }, {}));

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price)
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  handleAddProduct = id => {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ItemsList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item }) =>
          <ProductCard
            product={{ ...item, amount: amount[item.id] }}
            add={() => handleAddProduct(item.id)}
        />}
      />
    </Container>
  );
}
