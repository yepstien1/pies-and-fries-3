import React from 'react';
import logo from './logo.svg';
import OrderPage from './OrderPage.js'
import CustomerInfo from './CustomerInfo.js'

import './App.css';
class App extends React.Component{

  


  state={
      clicked:false,
      ordered:false,
      infoSubmitted:false
  }
  
 
  
  fetchFromWelcome =(childData) =>{
    this.setState({clicked:childData})
    
  }
  fetchFromOrder =(childData) =>{
    this.setState({ordered:childData.ordered})
   
    console.log(childData.clicked +"from fetchorder")
    this.setState({clicked:childData.clicked})


  }


    
  
      render(){
        var element;
        if(!this.state.clicked)
        element = <Welcome foo ={this.fetchFromWelcome}/>
        else if(!this.state.ordered)
        element=<OrderPage foo ={this.fetchFromOrder} clicked={this.state.clicked} />
else 
element=<CustomerInfo/>
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
   <h1>Welcome to Pies and Fries</h1>
    
    <p>This the EASIEST and FASTEST way to order PIZZA and FRIES for Delivery</p>
    <button type = "submit" onClick ={this.submit}>submit</button> 

                </div>

              
    
                   
            
                 
            )
        }
        submit =() =>{
          this.setState({clicked:true})
          this.welcomeFetch();

        }
        welcomeFetch=() =>
        {
          this.props.foo(this.state.clicked)
        }
    }
  


export default App;
