import React from 'react';
import { useSelector } from 'react-redux';

import CartIcon from '../../cart-icon/cart-icon.component';
import { CartHeaderContainer, CartTotalContainer } from './cart-header.styles';

const CartHeader = () => {
  //   const { total } = useSelector((state) => state.cartItems);
  const total = 145;
  return (
    <CartHeaderContainer>
      <CartTotalContainer>
        <span className='total-text'>Total: </span>
        <span className='total-cost'>{`€${total}`}</span>
      </CartTotalContainer>
    </CartHeaderContainer>
  );
};

export default CartHeader;
