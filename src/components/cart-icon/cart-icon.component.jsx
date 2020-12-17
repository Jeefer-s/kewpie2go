import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import {
  ShoppingCartIcon,
  CartContainer,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const itemCount = cartItems.reduce((sum, item) => item.quantity + sum, 0);

  return (
    <CartContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingCartIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
