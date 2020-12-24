import ShopActionTypes from './shop.types';
import { getAllCategories } from '../../services/shop-items-service';

export const fetchCategoriesStart = () => ({
  type: ShopActionTypes.FETCH_SHOP_START,
});

export const fetchCategoriesStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesStart());
    getAllCategories().then((data) => {
      console.log(data);
      dispatch(fetchCategoriesSuccess(data));
    });
  };
};

export const fetchCategoriesSuccess = (categories) => ({
  type: ShopActionTypes.FETCH_SHOP_SUCCESS,
  payload: categories,
});
