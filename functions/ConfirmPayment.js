const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SK);
exports.handler = async context => {
 const payload = context.body;

 console.log("Got payload: " + payload);
}
