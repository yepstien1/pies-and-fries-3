import React from 'react';


import {loadStripe} from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HIfiHBNlDExaBq3QpRDRJ7R1RFLJ3r5TrYDKUk34iq8gY1sXd5Jyh2OSGXpNEgNcsgTC3qBhkXjiKQ9LfYaBxpt00a6dtcUiR');

function PayMentPage() {

    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await fetch("https://pies-and-fries.netlify.app/.netlify/functions/create-checkout-session", {method: 'POST'});

        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.log(result.error.message)
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    };


    return (
        <button role="link" onClick={handleClick}>
            Checkout
        </button>
    );
}

export default PayMentPage


