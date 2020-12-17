import React from 'react';

import {
  ItemContainer,
  ItemInfoContainer,
  ItemImage,
  ItemPrice,
  ItemName,
  ItemDescription,
  ItemImageContainer,
} from './shop-item.styles';

const ShopItem = ({ shopItem }) => {
  const { id, name, price, description } = shopItem;
  const imgUrl = (id) => `/images/shop-items/${id}.png`;

  return (
    <ItemContainer>
      <ItemImageContainer>
        <ItemImage className='bg-image' src={imgUrl(id)} />
      </ItemImageContainer>
      <ItemInfoContainer>
        <ItemName>{name}</ItemName>
        <ItemPrice>{`€${price}`}</ItemPrice>
        <ItemDescription>{description}</ItemDescription>
      </ItemInfoContainer>
    </ItemContainer>
  );
};

export default ShopItem;
