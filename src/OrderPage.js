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
<table>
    <tr>
    <td align = 'justified'>Pies ($18) How many would you like</td>
<td><select onChange={this.handlePizzaChange} >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select></td>
    </tr>
    <tr>
    <td align = 'justified'> Fries ($3) How many would you like</td>
<td>
 
<select onChange={this.handleFriesChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    </td>
    </tr>
    <tr>
    <textarea value={this.getTotalString()}/> <br/>

    </tr>


</table>
                

                
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