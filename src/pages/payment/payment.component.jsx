import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import {
  PaymentPageContainer,
  ToggleButton,
  ToggleButtonContainer,
} from './payment.styles';
import IdealForm from './ideal-form/ideal-form.component';
import CreditcardForm from './creditcard-form/creditcard-form.component';

const stripePromise = loadStripe(
  'pk_test_51HtAaKJQEm0IxHlTiSSCOfsHE06fEawY5aCLwdj5m0WyxZVzH7NMadEfRUa5jTrGnNWT6uKuKo99xkBBQoMV0gTn00RmXYtGxC'
);

const PaymentPage = () => {
  const [isIdealSelected, setIsIdealSelected] = useState(true);

  const handleToggle = () => setIsIdealSelected(!isIdealSelected);

  return (
    <PaymentPageContainer>
      <ToggleButtonContainer>
        <ToggleButton onClick={handleToggle}>
          {isIdealSelected ? 'Pay with creditcard' : 'Pay with iDEAL'}
        </ToggleButton>
      </ToggleButtonContainer>

      <Elements stripe={stripePromise}>
        {isIdealSelected ? <IdealForm /> : <CreditcardForm />}
      </Elements>
    </PaymentPageContainer>
  );
};

export default PaymentPage;
