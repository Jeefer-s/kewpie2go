import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoginHidden } from '../../redux/header/header.actions';

import { selectCartTotal } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  OrderSummaryContainer,
  RowContainer,
  ValueContainer,
  TotalRowContainer,
  Divider,
  OrderButton,
  SignInButton,
} from './order-summary.styles';

const CheckoutSummary = () => {
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <OrderSummaryContainer>
      <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
      <RowContainer>
        <span>Shopping Cart Total</span>
        <ValueContainer>€{cartTotal}</ValueContainer>
      </RowContainer>
      <RowContainer>
        <span>Coupon Discount</span>
        <ValueContainer>€20</ValueContainer>
      </RowContainer>
      <RowContainer>
        <span>Chopsticks</span>
        <ValueContainer style={{ color: 'green' }}>FREE</ValueContainer>
      </RowContainer>
      <RowContainer>
        <span>Wasabi & Soy sauce</span>
        <ValueContainer style={{ color: 'green' }}>FREE</ValueContainer>
      </RowContainer>
      <RowContainer>
        <span>Delivery</span>
        <ValueContainer>€5</ValueContainer>
      </RowContainer>
      <Divider />
      <TotalRowContainer>
        <span style={{ fontSize: '20px', letterSpacing: '1px' }}>
          Order Total
        </span>
        <ValueContainer>€{cartTotal}</ValueContainer>
      </TotalRowContainer>
      <OrderButton inverted>
        <Link to='/shipping'>Place order</Link>
      </OrderButton>
      {currentUser ? null : (
        <SignInButton inverted onClick={() => dispatch(toggleLoginHidden())}>
          Sign in & Pay
        </SignInButton>
      )}
    </OrderSummaryContainer>
  );
};

export default CheckoutSummary;
