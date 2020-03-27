import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.15.4' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  console.tron = tron;

  tron.clear();
}
