
import React from "react"




class CustomerInfo extends React.Component
{
  
   

   


   


    render(){

        return(
            
           
                <form onSubmit={this.submit} className="block">
                 <h1>Please enter your information below</h1>
                <table>
<tr>
<td align="justify">
                        First Name
                        
                    </td>
                    <td align="justify">

                    <input type="text" id="firstName" onChange={this.handleFirstName } required/>

                    </td>

</tr>
                
                                   
                    <tr>
<td align="justify">
Last name      
                        
                    </td>
                    <td align="justify">

                    <input type="text" id="lastName"  onChange={this.handleLastName} required />

                    </td>



</tr>




                    

                    <tr>
<td align="justify">
                        
Mobile Number 
                    </td>
                    <td align="justify">

                    
                    <input type="text" id="phone number" onChange={this.handleNumber} required/>

                    </td>

</tr>
                    
                    

                    <tr>
<td align="justify">
Email address      
 
                    </td>
                    <td align="justify">

                    <input type="text" id="email" onChange={this.handleEmail} required/>
                    

                    </td>

</tr>
    
<tr>
<td align="justify">
 Address      
 
                    </td>
                    <td align="justify">

                    <input type="text" id="address" onChange={this.handleAddress} required/>
                    

                    </td>

</tr>                   

                    <tr>
<td align="justify">
City
 
                    </td>
                    <td align="justify">

                    
                    <input type="text" id="Citi" onChange={this.handleCiti} required/>

                    </td>

</tr>
                    
                    <tr>
<td align="justify">
Zip
 
                    </td>
                    <td align="justify">

                    
                    <input type="text" id="Zip" onChange={this.handleZip} required/>

                    </td>

</tr>          

                    

                  

                </table>

                   

                    <br/>

                    <button type = "submit" >submit</button> 
                </form>
            
        );
    
        }

        submit =(e)=>{
e.preventDefault();
            this.setState({infoSubmitted:true},() =>{ this.sendToParent()
            });
        }
        

        sendToParent =()=>{
            this.props.methodToPassToChild(this.state);

        }
    

    handleFirstName =(event) => {
        this.setState({firstName:event.target.value})

    }

    handleLastName =(event) => {
        this.setState({lastName:event.target.value})

    }

    handleNumber =(event) => {
        this.setState({phoneNumber:+event.target.value})

    }

    handleEmail =(event) => {
        this.setState({email:event.target.value})

    }

    handleAddress=(event)=> {
        this.setState({address:event.target.value})
    }

    handleCiti=(event)=> {
        this.setState({city:event.target.value})
    }


    handleZip=(event)=> {
        this.setState({zip:+event.target.value})
    }



}

//Customer_Info.contextType=CustomerContext;
export default CustomerInfo
