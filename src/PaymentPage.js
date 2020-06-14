
import React from 'react'
class PaymentPage extends React.Component {
  
    render() {
        console.log(this.state)
        return (
            
                <form>
                    <label>
                        Please enter your Venmo  or zelle  account info so we can bill you
                        <input type="text" id="payment info
                        " onChange={this.handlePayment}/>
                    </label>
<br/>
                  

                   
                    <button type= 'submit' onClick ={this.onClick}>submit</button>
                </form>
            

        )
    }

    handlePayment=(event) =>{
        this.setState({paymentInfo : event.target.value,
        paymentSubmitted:true})

    }

    onClick = () =>{
        this.props.foo(this.state);

    }
}
 export default PaymentPage