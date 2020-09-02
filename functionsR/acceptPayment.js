const stripe = require('stripe')(process.env.REACT_APP_STRIPE);
const express = require("express");
const app = express();
//const { resolve } = require("path");
app.use(express.static("."));
app.use(express.json());
exports.handler=async (event,context)=>{
    const calculateOrderAmount = items => {
        // Replace this constant with a calculation of the order's amount
        // Calculate the order total on the server to prevent
        // people from directly manipulating the amount on the client
        return 1400;
      };

      app.post("/create-payment-intent", async (req, res) => {
        const { items } = req.body;
    const paymentIntent =   await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
      });
      res.send({
        clientSecret: paymentIntent.client_secret
      });
    });
    app.listen(4242, () => console.log('Node server listening on port 4242!'));

}


