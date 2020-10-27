// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.
//const axios = require('axios')
const express = require('express');
exports.handler = async (event, context) => {
    const app = express();

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
    const stripe = require('stripe')('sk_test_51HIfiHBNlDExaBq31LKsflS1EOT0zQQXt5uDpsLR1DQ1HPGzXzi4tM40quOiEPbAFGkcpXVCMOt7vRotzKA2xVcL00Tc2HcrDg');


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
            success_url: 'https://example.com/success',
            cancel_url: 'https://example.com/cancel',
        });
    console.log("session with stringify:" + JSON.stringify(session))
    console.log("session withput stringify:" + session)


}