import React from 'react';
import { useSelector } from 'react-redux';

import {
  ShoppingCartIcon,
  CartContainer,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  //   const { itemCount } = useSelector((state) => state);

  return (
    <CartContainer>
      <ShoppingCartIcon />
      <ItemCountContainer>8</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
