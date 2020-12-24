import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesStartAsync } from '../../redux/shop/shop.actions';
import {
  selectCategories,
  selectIsFetching,
} from '../../redux/shop/shop.selectors';

import { ShopPageContainer } from './shop.styles';
import ShopCategory from '../../components/shop-category/shop-category.component';
import Spinner from '../../components/spinner/spinner.component';

const ShopPage = () => {
  const dispatch = useDispatch();
  const shopItems = useSelector(selectCategories);
  const isFetching = useSelector(selectIsFetching);
  useEffect(() => dispatch(fetchCategoriesStartAsync()), []);

  console.log(shopItems);

  return (
    <ShopPageContainer>
      {isFetching ? (
        <Spinner />
      ) : (
        shopItems.map((category) => (
          <ShopCategory category={category} key={category.id} />
        ))
      )}
    </ShopPageContainer>
  );
};

export default ShopPage;
