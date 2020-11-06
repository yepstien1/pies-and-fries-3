// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.
//const axios = require('axios')

exports.handler = async (event, context) => {


var order;
    const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SK);
    var info = JSON.parse(event.body);
    var encodedInfo = window.btoa(event.body);
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `Pies: ${info.pies} Fries: ${info.fries} `,

                    },
                    unit_amount: info.total * 100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `https://pies-and-fries.netlify.app?info=${encodedInfo}`,
        cancel_url: 'https://pies-and-fries.netlify.app',
    });
console.log("hi from func")
   return {
       statusCode: 200,
       body: JSON.stringify({
           sessionId: session.id
       })
   }



}