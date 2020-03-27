import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import Toast from 'react-native-simple-toast';

import api from '../../../services/api';
import Navigator from '../../../services/navigation';
import { formatPrice } from '../../../utils/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(
    state => state.cart.find(p => p.id === id),
  );

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount: 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Toast.show('Quantidade solicitada fora de estoque', Toast.SHORT);
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount,
      priceFormatted: formatPrice(response.data.price)
    }

    yield put(addToCartSuccess(data));

    Navigator.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount === 0) return;

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Toast.show('Quantidade solicitada fora de estoque', Toast.SHORT);
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
]);
