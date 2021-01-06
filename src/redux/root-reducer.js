import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from '../redux/cart/cart.reducer';
import shopReducer from '../redux/shop/shop.reducer';
import headerReducer from '../redux/header/header.reducer';
import userReducer from '../redux/user/user.reducer';
import orderReducer from '../redux/order/order.reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  header: headerReducer,
  shop: shopReducer,
  user: userReducer,
  order: orderReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user'],
};

export default persistReducer(persistConfig, rootReducer);
