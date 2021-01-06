import React from 'react';

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';

import { PaymentFormContainer, FormContainer, Logo } from '../payment.styles';
import CustomButton from '../../../components/custom-button/custom-button.component';

const options = {
  classes: {
    base: 'StripeElement',
    focus: 'StripeElement--focus',
  },
  style: {
    base: {
      fontSize: '18px',
      color: '#424770',
      letterSpacing: '0.025em',
      fontFamily: 'Source Code Pro, monospace',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

const CreditcardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });
    console.log('[PaymentMethod]', payload);
  };

  return (
    <FormContainer>
      <PaymentFormContainer onSubmit={handleSubmit}>
        <h4>Pay with credit card</h4>

        <Logo src='/images/logo-creditcard.png' />

        <label>
          Card number
          <CardNumberElement
            options={options}
            onReady={() => {
              console.log('CardNumberElement [ready]');
            }}
            onChange={(event) => {
              console.log('CardNumberElement [change]', event);
            }}
            onBlur={() => {
              console.log('CardNumberElement [blur]');
            }}
            onFocus={() => {
              console.log('CardNumberElement [focus]');
            }}
          />
        </label>
        <label>
          Expiration date
          <CardExpiryElement
            options={options}
            onReady={() => {
              console.log('CardNumberElement [ready]');
            }}
            onChange={(event) => {
              console.log('CardNumberElement [change]', event);
            }}
            onBlur={() => {
              console.log('CardNumberElement [blur]');
            }}
            onFocus={() => {
              console.log('CardNumberElement [focus]');
            }}
          />
        </label>
        <label>
          CVC
          <CardCvcElement
            options={options}
            onReady={() => {
              console.log('CardNumberElement [ready]');
            }}
            onChange={(event) => {
              console.log('CardNumberElement [change]', event);
            }}
            onBlur={() => {
              console.log('CardNumberElement [blur]');
            }}
            onFocus={() => {
              console.log('CardNumberElement [focus]');
            }}
          />
        </label>
        <CustomButton type='submit'>PAY NOW</CustomButton>
      </PaymentFormContainer>
    </FormContainer>
  );
};

export default CreditcardForm;
