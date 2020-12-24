import { SHOP_DATA } from './shop.data';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  categories: [],
  isFetching: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_SHOP_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_SHOP_SUCCESS:
      return { ...state, isFetching: false, categories: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
