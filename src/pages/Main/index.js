import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/Cart/actions';

import ProductCard from '../../components/ProductCard';

import { Container, ItemsList } from './styles';

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    console.tron.log(this.props);

    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price)
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <ItemsList
          data={products}
          keyExtractor={(product) => product.id.toString()}
          renderItem={({ item }) =>
            <ProductCard
              product={{ ...item, amount: amount[item.id] }}
              add={() => this.handleAddProduct(item.id)}
            />}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
