import React from 'react';

import {
  ItemContainer,
  ItemInfoContainer,
  ItemImage,
  ItemPrice,
  ItemName,
  ItemDescription,
} from './shop-item.styles';

const ShopItem = ({ shopItem }) => {
  const itemStyle = {
    color: '#353131',
    padding: '0 8px',
    border: '1px solid rgba(255, 255, 255, 0.7)',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'antiquewhite',
    borderRadius: '4px',
  };

  const imgUrl = (id) => `/images/shop-items/${id}.png`;

  return (
    <ItemContainer>
      <div style={{ display: 'block' }}>
        <ItemImage src={imgUrl(shopItem.id)} />
      </div>
      <ItemInfoContainer>
        <ItemName style={itemStyle}>{shopItem.name}</ItemName>
        <ItemPrice>{`€${shopItem.price}`}</ItemPrice>
        <ItemDescription>{shopItem.description}</ItemDescription>
      </ItemInfoContainer>
    </ItemContainer>
  );
};

export default ShopItem;
