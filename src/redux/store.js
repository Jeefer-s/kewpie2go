import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import cartReducer from '../redux/cart/cart.reducer';

const store = createStore(
  combineReducers({
    cart: cartReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
