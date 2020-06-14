
import React from "react";

class PaymentPage extends React.Component {
    state = {
        
    }
    render() {
        console.log(this.state)
        return (
            <Layout>
                <form>
                    <label>
                        Please enter your Venmo  or zelle  account info so we can bill you
                        <input type="text" id="payment info
                        " onChange={this.handlePayment}/>
                    </label>
<br/>
                    <Link to="/Review/" state={this.state}>Proceed to confirmation page</Link>

                    <h1> debug{this.state.firstName}</h1>
                </form>
            </Layout>

        )
    }

    

    handlePayment=(event) =>{
        this.setState({paymentInfo : event.target.value})

    }
}
 export default PaymentPage