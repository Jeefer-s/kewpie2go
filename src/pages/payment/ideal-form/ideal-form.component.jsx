import React from 'react';
import { useSelector } from 'react-redux';
import {
  useStripe,
  useElements,
  IdealBankElement,
} from '@stripe/react-stripe-js';
import { selectRecipient } from '../../../redux/order/order.selectors';
import { PaymentFormContainer, FormContainer, Logo } from '../payment.styles';
import CustomButton from '../../../components/custom-button/custom-button.component';

const options = {
  classes: {
    base: 'StripeElement',
    focus: 'StripeElement--focus',
  },
  style: {
    base: {
      color: '#424770',
      letterSpacing: '0.025em',
      fontFamily: 'Source Code Pro, monospace',
      '::placeholder': {
        color: '#aab7c4',
      },
      padding: '10px 14px',
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

const IdealForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const name = useSelector(selectRecipient);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: 'ideal',
      ideal: elements.getElement(IdealBankElement),
      billing_details: {
        name: name,
      },
    });
    console.log('[PaymentMethod]', payload);
  };

  return (
    <FormContainer>
      <PaymentFormContainer onSubmit={handleSubmit}>
        <label>
          <h4>Pay with iDEAL</h4>

          <Logo src='/images/logo-ideal.png' />

          <IdealBankElement
            className='IdealBankElement'
            options={options}
            onReady={() => {
              console.log('IdealBankElement [ready]');
            }}
            onChange={(event) => {
              console.log('IdealBankElement [change]', event);
            }}
            onBlur={() => {
              console.log('IdealBankElement [blur]');
            }}
            onFocus={() => {
              console.log('IdealBankElement [focus]');
            }}
          />
        </label>
        <CustomButton type='submit'>PAY NOW</CustomButton>
      </PaymentFormContainer>
    </FormContainer>
  );
};

export default IdealForm;
