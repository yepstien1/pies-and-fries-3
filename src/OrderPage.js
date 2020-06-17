import React from 'react';
import {Form, Button}  from 'react-bootstrap'

class OrderPage extends React.Component {

 
    state={
        pies:0,
        fries:0,
        totalPricePies :0,
        totalPriceFries :0,
        ordered:false,
        warning:''
        

    }
   

   

    render() {
        return  (
<div>
<h1>What would you like ?</h1>
<Form>
  
  <Form.Group controlId="exampleForm.ControlSelect1" onChange={this.handlePizzaChange}>
    <Form.Label >Pies ($18) How many would you like</Form.Label>
    <Form.Control  size ='sm' as="select" >
    <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  

  <Form.Group controlId="exampleForm.ControlSelect1" onChange ={this.handleFriesChange}>
    <Form.Label> Fries ($3) How many would you like</Form.Label>
    <Form.Control  size ='sm' as="select" >
    <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    
 
  </Form.Group>
  <textarea value={this.getTotalString()}/> <br/>
</Form>

                

                
<Button variant ="primary" onClick ={this.onClick}>submit</Button>
                <h4>{this.state.warning}</h4>

             
              



                




</div>
 
 );
}

orderFetch=() =>
{
    
 
  this.props.foo(this.state)
}

onClick =(e) =>{
   // e.preventDefault();
    if(this.state.pies===0&&this.state.fries===0)
    {

        this.setState({warning:"you forgot to select how many pies and fries you want"})
    }
    else {
        this.setState({ordered:true}, ()=>{
            this.orderFetch();
        });
    }
    
}
    



 


    getTotalString=() =>{
        //let total = "Total is $ ";
        let numberTotal=0;
        numberTotal= +this.state.totalPriceFries + +this.state.totalPricePies;
        console.log(numberTotal)
     let   total =`Total is ${this.state.pies} pies and ${this.state.fries} fries  = $ ${numberTotal}`;

        return total;
    }

    handlePizzaChange=  (event ) => {
        this.setState({pies:event.target.value })
        let piePrice =18;

        let total = piePrice* +event.target.value;

        // for self why does this not work    let total = piePrice* +this.state.pies;
        console.log("total pie price"+total)
        this.setState({totalPricePies:total })
       

    }



    handleFriesChange=  (event ) => {
        this.setState({fries: event.target.value})
        let friePrice=3;
        let  total =friePrice* +event.target.value;
        console.log("total pie price"+total)
        this.setState({totalPriceFries:total })

    }

}


export default OrderPage;