import React from 'react';
import { useSelector } from 'react-redux';

import { CartContainer } from './cart-dropdown.styles';

import CartHeader from './cart-header/cart-header.component';

const CartDropdown = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <CartContainer>
      <CartHeader />
    </CartContainer>
  );
};

export default CartDropdown;
