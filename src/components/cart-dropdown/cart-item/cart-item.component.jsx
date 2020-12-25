import React from 'react';
import { useDispatch } from 'react-redux';
import { getImageUrl } from '../../../utils/image-url';

import { CartItemContainer, ItemContainer } from './cart-item.styles';
import RemoveButton from '../../remove-button/remove-button.component';

import { clearItemFromCart } from '../../../redux/cart/cart.actions';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, quantity, price, id } = cartItem;

  return (
    <CartItemContainer>
      <ItemContainer>
        <img src={getImageUrl(name)} alt='' />
        <span className='item-name'>{name}</span>
        <span className='item-price'>{`€${price}`}</span>
        <span className='item-quantity'>Quantity: {quantity}</span>
      </ItemContainer>
      <RemoveButton handleClick={() => dispatch(clearItemFromCart(cartItem))} />
    </CartItemContainer>
  );
};

export default CartItem;
