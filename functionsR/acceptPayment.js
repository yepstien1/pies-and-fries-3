// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.
//const axios = require('axios')
const express = require('express');
exports.handler = async (event, context) => {
    const app = express();


    const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SK);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'T-shirt',
                        },
                        unit_amount: 2000,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'https://pies-and-fries.netlify.app?Confirmed=true',
            cancel_url: 'https://example.com/cancel',
        });
console.log("hi from func")
   return {
       statusCode: 200,
       body: JSON.stringify({
           sessionId: session.id
       })
   }



}