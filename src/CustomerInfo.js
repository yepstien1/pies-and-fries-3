
import React from "react"




class CustomerInfo extends React.Component
{
  
   

   


   


    render(){

        return(
            

                <form>

                       <h1>l</h1>

                   <label>
                         First Name
                        <input type="text" id="firstName" onChange={this.handleFirstName } required/>
                    </label>
                    <br/>
                    <label>
                     Last name
                    <input type="text" id="lastName"  onChange={this.handleLastName} />
                </label>
                    <br/>
                    <label>
                        Mobile Number
                        <input type="text" id="phone number" onChange={this.handleNumber}/>
                    </label>
                    <br/>


                    
                    <label>
                        Email address
                        <input type="text" id="email" onChange={this.handleEmail}/>
                    </label>
                    <br/>

                    <label>
                         Address
                        <input type="text" id="address" onChange={this.handleAddress}/>
                    </label>
                    <br/>

                    <label>
                        City
                        <input type="text" id="Citi" onChange={this.handleCiti}/>
                    </label>
                    <br/>

                    <label>
                        Zip
                        <input type="text" id="Zip" onChange={this.handleZip}/>
                    </label>
                    <br/>





                    <br/>
<h4> {this.state.address}</h4>





                </form>
            
        );
    
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
