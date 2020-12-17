import React from 'react';

import { CartItemContainer } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt='' />
      <span className='item-name'>{name}</span>
      <span className='item-price'>{`€${price}`}</span>
      <span className='item-quantity'>Quantity: {quantity}</span>
    </CartItemContainer>
  );
};

export default CartItem;
