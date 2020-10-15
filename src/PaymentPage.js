import React from 'react';
import ReactDOM from 'react-dom';
import Confirmation from "./Confirmation";
import {loadStripe} from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HIfiHBNlDExaBq3QpRDRJ7R1RFLJ3r5TrYDKUk34iq8gY1sXd5Jyh2OSGXpNEgNcsgTC3qBhkXjiKQ9LfYaBxpt00a6dtcUiR');

function PayMentPage() {
    return (
        <button role="link">
            Checkout
        </button>
    );
}

export default PayMentPage


