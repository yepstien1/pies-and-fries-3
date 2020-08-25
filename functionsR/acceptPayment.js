const stripe = require('stripe')('sk_test_51HIfiHBNlDExaBq31LKsflS1EOT0zQQXt5uDpsLR1DQ1HPGzXzi4tM40quOiEPbAFGkcpXVCMOt7vRotzKA2xVcL00Tc2HcrDg');
exports.handler=async (event,context)=>{

    const paymentIntent =   await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
      });


}


