import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  'pk_test_51HtAaKJQEm0IxHlTiSSCOfsHE06fEawY5aCLwdj5m0WyxZVzH7NMadEfRUa5jTrGnNWT6uKuKo99xkBBQoMV0gTn00RmXYtGxC'
);
