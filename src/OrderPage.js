import React from 'react';
import { Button}  from 'react-bootstrap'
import { FaPlus, FaMinus } from "react-icons/fa";



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
<div className="block">
<h1>What would you like ?</h1>




<table>
    <tr>
    <td align = 'justified'>Pies ($18) How many would you like  <button onClick={this.incrementPies}><FaPlus/></button>  <button onClick ={this.decrementPies}><FaMinus/></button>  </td>

    </tr>
    <tr>
    <td align = 'justified'> Fries ($3) How many would you like <button onClick={this.incrementFries} ><FaPlus/></button>  <button onClick ={this.decrementFries}><FaMinus/></button>   </td>

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

log=() =>{
    const winston = require('winston');
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
          //
          // - Write to all logs with level `info` and below to `combined.log` 
          // - Write all logs error (and below) to `error.log`.
          //
         
          new winston.transports.File({ filename: 'error.log', level: 'error' }),
          new winston.transports.File({ filename: 'combined.log' })
        ]
      }); 
      logger.log("hi"); 
     
}
orderFetch=() =>
{
  //  this.log();
 
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

    incrementPies=() =>{
     var   oldState =this.state.pies;
     oldState++;
     console.log("old state:" +oldState);
        this.setState({pies:oldState}, this.ChangeTotalPies(oldState))
       

    }

    decrementPies=() =>{
        var   oldState =this.state.pies;
        oldState--;
           this.setState({pies:oldState})
           this.ChangeTotalPies();
   
       }

       
    incrementFries=() =>{
        var   oldState =this.state.fries;
        oldState=oldState+1;
           this.setState({fries:oldState})
           this.ChangeTotalFries();
   
       }
   
       decrementFries=() =>{
           var   oldState =this.state.fries;
           oldState--;
              this.setState({fries:oldState})
              this.ChangeTotalFries();
      
          }




    ChangeTotalPies=  (oldState) => {
        
        let piePrice =18;
        console.log("pies in change"+this.state.pies)

        let total = piePrice* oldState

       
        console.log("total pie price"+total)

        this.setState({totalPricePies:total })
       
       

    }



    ChangeTotalFries=  ( ) => {
     
        let friePrice=3;
        let  total =friePrice* this.state.fries;
        console.log("total pie price"+total)
        this.setState({totalPriceFries:total })

    }

}


export default OrderPage;