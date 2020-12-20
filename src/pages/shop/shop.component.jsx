import React from 'react';

import ShopCategory from '../../components/shop-category/shop-category.component';
import { SHOP_DATA as categories } from '../../redux/shop/shop.data';

const ShopPage = () => {
  return (
    <div>
      {categories.map((category) => (
        <ShopCategory category={category} key={category.id} />
      ))}
    </div>
  );
};

export default ShopPage;
