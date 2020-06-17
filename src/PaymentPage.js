
import React from 'react'

class PaymentPage extends React.Component {
  state={
message:""
  }
    render() {
        console.log(this.state)
        return (
            
                <form onSubmit={this.onClick}>
                    <label>
                        Please enter your Venmo  or zelle  account info so we can bill you
                        <input type="text" id="payment info
                        " onChange={this.handlePayment} required/>
                    </label>
<br/>
                  

                   
                    <button type= 'submit' >submit</button>
                    <h4>{this.state.message}</h4>
                </form>
              
            

        )
    }

    handlePayment=(event) =>{
       
        

        this.setState({paymentInfo : event.target.value,
        paymentSubmitted:true})

    }

    onClick = (event) =>{
        event.preventDefault();
        var validEmail,validNumber;
        
        validEmail = this.emailIsValid(this.state.paymentInfo) 
        validNumber=this.phoneNumberIsValid(this.state.paymentInfo)
        if(validEmail||validNumber)
        {
            this.props.foo(this.state);
        }
       
        else{
            this.setState({message:"please enter valid email address or phone number"})
        }
       

    }
    emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) 
      }


      phoneNumberIsValid(number) {
          return  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(number)
      }
}
 export default PaymentPage