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
    <td align = 'justified'>Pies ($18) How many would you like</td><button onClick={this.incrementPies}><FaPlus/> </button><button onClick ={this.decrementPies}><FaMinus/></button>

    </tr>
    <tr>
    <td align = 'justified'> Fries ($3) How many would you like</td><button onClick={this.incrementFries} ><FaPlus/> </button><button onClick ={this.decrementFries}><FaMinus/></button>

    </tr>
    <tr>
    <textarea value={this.getTotalString()}/> <br/>

    </tr>


</table>
                

                
<Button variant ="primary" onClick ={this.onClick}>submit</Button>
                <h4>{this.state.warning}</h4>

             
                        
<a href="./functions/acceptPayment">link</a>




                




</div>
 
 );
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
        var numberTotal=0;
        numberTotal= +this.state.totalPriceFries + +this.state.totalPricePies;
        console.log(numberTotal)
     var  total =`Total is ${this.state.pies} pies and ${this.state.fries} fries  = $ ${numberTotal}`;

        return total;
    }

    incrementPies=() =>{
         this.setState({warning:''})
     var   oldState =this.state.pies;
     oldState++;
     console.log("old state:" +oldState);
        this.setState({pies:oldState}, this.ChangeTotalPies)
        
       

    }

    decrementPies=() =>{
        var   oldState =this.state.pies;
        if(oldState>0)
        {
            
           
            oldState--;
            this.setState({pies:oldState},  this.ChangeTotalPies)
          
        }

        else {
            this.setState({warning:'Cannot have negative quantaties'})
        }
       
   
       }

       
    incrementFries=() =>{
        this.setState({warning:''})
        var   oldState =this.state.fries;
        oldState=oldState+1;
           this.setState({fries:oldState},this.ChangeTotalFries)
           
   
       }
   
       decrementFries=() =>{
           var   oldState =this.state.fries;

           if(oldState>0)
           {
               
              
               oldState--;
               this.setState({fries:oldState} ,this.ChangeTotalFries)
              
           }
   
           else {
               this.setState({warning:'Cannot have negative quantaties'})
           }
          
      
          }




    ChangeTotalPies=  () => {
        console.log(" changeTotalPie func" +new Date().toLocaleString())
        var piePrice =18;
        console.log("pies in change"+this.state.pies)

        var total = piePrice* this.state.pies

       
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