import React, { Component } from 'react';
import api from '../../services/api';

import ProductCard from '../../components/ProductCard';

import { Container, ItemsList } from './styles';

export default class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ItemsList
          data={products}
          keyExtractor={(product) => product.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      </Container>
    );
  }
}
