import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51HZfSeFxPStfb0pAweW5MTMy7SmD2xc1CWMFC9J48GHWCU7wrWz1lRsILJz9rRLiJLxaxk1VDxWm40ilwCSneWeA00zA3W9o7N');


const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>

            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;