import React from 'react';
import {Form} from 'react-bootstrap'
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
<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>

                

                
               
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