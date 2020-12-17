import React from 'react';

import {
  CategoryContainer,
  GridContainer,
  Title,
  TitleContainer,
} from './shop-category.styles';
import ShopItem from '../shop-item/shop-item.component';

const ShopCategory = ({ category }) => (
  <CategoryContainer>
    <TitleContainer>
      <Title>{category.title}</Title>
    </TitleContainer>
    <GridContainer>
      {category.items.map((item) => (
        <ShopItem shopItem={item} key={item.id} />
      ))}
    </GridContainer>
  </CategoryContainer>
);

export default ShopCategory;
