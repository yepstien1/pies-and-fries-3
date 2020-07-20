import React from 'react';

import OrderPage from './OrderPage.js'
import CustomerInfo from './CustomerInfo.js'
import PaymentPage from './PaymentPage'
import Review from './Review'
import Confirmation from './Confirmation'
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
class App extends React.Component{
componentDidMount()
{
  document.title="Pies and Fries"
}
  


  state={
      clicked:false,
      ordered:false,
      infoSubmitted:false,
      paymentSubmitted:false,
      confirmed: false
  }
  
 
  
  fetchFromWelcome =(childData) =>{
    this.setState({clicked:childData})
    
  }
  fetchFromOrder =(childData) =>{
    this.setState({ordered:childData.ordered,pies:childData.pies,fries:childData.fries,
    totalPricePies:childData.totalPricePies,
    totalPriceFries:childData.totalPriceFries,
  })

  
   
 
    //this.setState({clicked:childData.clicked})


  } 

  fetchFromCustomer =(childData) =>{
this.setState({...childData})


  }


  fetchFromPayment =(childData) =>{
    this.setState({...childData})
  }

  fetchFromReview=(childData) =>{
    if(childData==='ordered')
    this.setState({ordered:false})
    else if(childData==='infoSubmitted')
    this.setState({infoSubmitted:false})
    else if(childData==='paymentSubmitted')
    this.setState({paymentSubmitted:false})
    else {
      this.setState({confirmed:true})
    }




  }


    
  
      render(){
        var element;
        if(!this.state.clicked)
        element = <Welcome foo ={this.fetchFromWelcome}/>
        else if(!this.state.ordered)
        element=<OrderPage foo ={this.fetchFromOrder}  />
else if(!this.state.infoSubmitted)
element=<CustomerInfo foo={this.fetchFromCustomer}/>
else if(!this.state.paymentSubmitted)
element = <PaymentPage foo={this.fetchFromPayment}/>
else if(!this.state.confirmed)
element =<Review {...this.state} foo ={this.fetchFromReview}/>
else if(this.state.confirmed)
element =<Confirmation/>

          return (
            
   element
                 
              
               
          )
      }
  }

  class Welcome extends React.Component{
  state ={
    clicked: false
  }
    
        render(){
            return (
              
            <div>
   <h1 className= "text">Welcome to Pies and Fries</h1>
    
    <p className="text">This the EASIEST and FASTEST way to order PIZZA and FRIES for Delivery</p>
    <button type = "submit" onClick ={this.submit}>Click here to Eat</button> 

                </div>

              
    
                   
            
                 
            )
        }
        submit =() =>{
          this.setState({clicked:true},()=>{
            this.welcomeFetch();
          }
          );
         

        }
        welcomeFetch=() =>
        {
          this.props.foo(this.state.clicked)
        }
    }
  


export default App;
