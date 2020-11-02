import React from "react";
import {loadStripe} from "@stripe/stripe-js";


// Todo move sendemail and savetotable


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HIfiHBNlDExaBq3QpRDRJ7R1RFLJ3r5TrYDKUk34iq8gY1sXd5Jyh2OSGXpNEgNcsgTC3qBhkXjiKQ9LfYaBxpt00a6dtcUiR');

class Review extends React.Component {
    state = {
        ...this.props,
        fullName: this.props.firstName + " " + this.props.lastName
    }


    render() {


        return (

            /*

                           <h1>Does everything look right?</h1>

                      <form>
                               <table>
                                   <tr>
                                       <td
                                           align="justify">Name
                                       </td>
                                       <td
                                           align="justify">
                                           <input type="text" id="fullname" value={this.state.fullName}/>

                                       </td>
                                   </tr>

                                   <tr>
                                       <td
                                           align="justify"> Pies :
                                       </td>
                                       <td
                                           align="justify">
                                           <input type="text" id="Pies" value={this.state.pies}/>

                                       </td>
                                   </tr>


                                   <tr>
                                       <td
                                           align="justify">Fries :
                                       </td>
                                       <td
                                           align="justify">
                                           <input type="text" id="Fries" value={this.state.fries}/>

                                       </td>
                                   </tr>

                                   <tr>
                                       <td
                                           align="justify">Total : $
                                       </td>
                                       <td
                                           align="justify">
                                           <input type="text" id="Total"
                                                  value={this.state.totalPricePies + this.state.totalPriceFries}/>

                                       </td>
                                   </tr>

                                   <tr>
                                       <td align="justify">

                                           Mobile Number
                                       </td>
                                       <td align="justify">


                                           <input type="text" id="phone number" value={this.state.phoneNumber} required/>

                                       </td>

                                   </tr>


                                   <tr>
                                       <td align="justify">
                                           Email address

                                       </td>
                                       <td align="justify">

                                           <input type="text" id="email" value={this.state.email}/>


                                       </td>

                                   </tr>

                                   <tr>
                                       <td align="justify">
                                           Address

                                       </td>
                                       <td align="justify">

                                           <input type="text" id="address" value={this.state.address}/>


                                       </td>

                                   </tr>

                                   <tr>
                                       <td align="justify">
                                           City

                                       </td>
                                       <td align="justify">


                                           <input type="text" id="Citi" value={this.state.city}/>

                                       </td>

                                   </tr>

                                   <tr>
                                       <td align="justify">
                                           Zip

                                       </td>
                                       <td align="justify">


                                           <input type="text" id="Zip" value={this.state.zip}/>

                                       </td>

                                   </tr>


                               </table>


                               <br/>

           */
            <div>
                <button role="link" onClick={this.onClick}>submit</button>
                <button onClick={this.returnToOrderPage}>edit your order</button>

                <button onClick={this.returnToCustomerInfo}>Edit your Address</button>
                <button onClick={this.returnToPaymentInfo}> Edit Payment Info</button>
            </div>

            /*      </form> */


        );
    }


    onClick = async (event) => {


      /*  var abbreviatedState = {
            name: this.state.fullName,
            email: this.state.email,
            pies: this.state.pies,
            totalPies: this.state.totalPricePies,
            fries: this.state.fries,
            totalFries: this.state.totalPriceFries,
            total: +this.state.totalPriceFries + +this.state.totalPricePies,
            paymentInfo: this.state.paymentInfo,


            phone: this.state.phoneNumber,
            address: this.state.address,
            city: this.state.city,
            zip: this.state.zip,
            orderTime: new Date().toLocaleString()
        }
*/


        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await fetch("https://pies-and-fries.netlify.app/.netlify/functions/acceptPayment", {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            }
        });
        const session = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.sessionId
        });


        if (result.error) {
            console.log(result.error.message)
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }


     /*   fetch("https://pies-and-fries.netlify.app/.netlify/functions/airTable", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(abbreviatedState),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        fetch("https://pies-and-fries.netlify.app/.netlify/functions/sendEmail", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(abbreviatedState),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
*/

        //this.props.methodToPassToChild('confirmed');
    }
    returnToOrderPage = () => {
        this.props.methodToPassToChild('ordered');
    }

    returnToCustomerInfo = () => {
        this.props.methodToPassToChild('infoSubmitted');

    }

    returnToPaymentInfo = () => {

        this.props.methodToPassToChild('paymentSubmitted');
    }


}

export default Review

