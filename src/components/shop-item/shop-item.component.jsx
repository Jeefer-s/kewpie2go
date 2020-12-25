import React from 'react';
import { useDispatch } from 'react-redux';
import { getImageUrl } from '../../utils/image-url';

import { addItemToCart } from '../../redux/cart/cart.actions';

import {
  ItemContainer,
  ItemInfoContainer,
  ItemImage,
  ItemPrice,
  ItemName,
  ItemDescription,
  ItemImageContainer,
  AddButton,
} from './shop-item.styles';

const ShopItem = ({ shopItem }) => {
  const { name, price, description } = shopItem;

  const dispatch = useDispatch();

  return (
    <ItemContainer>
      <ItemImageContainer>
        <ItemImage className='bg-image' src={getImageUrl(name)} />
      </ItemImageContainer>
      <ItemInfoContainer>
        <ItemName>{name}</ItemName>
        <ItemPrice>{`€${price}`}</ItemPrice>
        <ItemDescription>{description}</ItemDescription>
      </ItemInfoContainer>
      <AddButton onClick={() => dispatch(addItemToCart(shopItem))}>
        Add to cart
      </AddButton>
    </ItemContainer>
  );
};

export default ShopItem;
