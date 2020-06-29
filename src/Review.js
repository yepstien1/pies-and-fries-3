/* global gapi */

import React from "react";

import emailjs from 'emailjs-com';

require('dotenv').config()   


console.log(process.env);
const SPREADSHEET_ID=process.env.REACT_APP_GOOGLSHEET_ID
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SCOPE ="https://www.googleapis.com/auth/spreadsheets";
//const SCOPE ="profile";
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;


 
/*var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level="debug";
logger.debug("hi")*/


class Review extends React.Component {
    state={
        ...this.props,
    fullName:this.props.firstName+ " " + this.props.lastName
    }

   








    render()
    {



        return (

            
<div>
<h1>Does everything look right?</h1>
                <form  >
                <table>
                    <tr>
                        <td
                        align="justify">Name </td>
                         <td
                        align="justify">
<input type="text" id = "fullname" value ={this.state.fullName}/>

                        </td>
                    </tr>

                    <tr>
                        <td
                        align="justify"> Pies :</td>
                         <td
                        align="justify">
<input type="text" id = "Pies" value =  {this.state.pies}/>

                        </td>
                    </tr>


                    <tr>
                        <td
                        align="justify">Fries :</td>
                         <td
                        align="justify">
 <input type="text" id = "Fries" value =  {this.state.fries}/>

                        </td>
                    </tr>

                    <tr>
                        <td
                        align="justify">Total : $</td>
                         <td
                        align="justify">
 <input type="text" id = "Total" value =  {this.state.totalPricePies+this.state.totalPriceFries}/>

                        </td>
                    </tr>

                    <tr>
<td align="justify">
                        
Mobile Number 
                    </td>
                    <td align="justify">

                    
                    <input type="text" id="phone number" value={this.state.phoneNumber} required/>

                    </td>

</tr>
                    
                    

                    <tr>
<td align="justify">
Email address      
 
                    </td>
                    <td align="justify">

                    <input type="text" id="email" value={this.state.email}/>
                    

                    </td>

</tr>
    
<tr>
<td align="justify">
 Address      
 
                    </td>
                    <td align="justify">

                    <input type="text" id="address" value={this.state.address}/>
                    

                    </td>

</tr>                   

                    <tr>
<td align="justify">
City
 
                    </td>
                    <td align="justify">

                    
                    <input type="text" id="Citi" value={this.state.city}/>

                    </td>

</tr>
                    
                    <tr>
<td align="justify">
Zip
 
                    </td>
                    <td align="justify">

                    
                    <input type="text" id="Zip" value={this.state.zip}/>

                    </td>

</tr>          



                </table>
                 
                  

                    <br/>
                  






                <button type ='submit' onClick ={this.onClick}>submit</button> <button onClick ={this.returnToOrderPage}>edit your order</button>

              <button onClick ={this.returnToCustomerInfo}>Edit your Address</button>     <button onClick ={this.returnToPaymentInfo}> Edit Payment Info</button>
                </form>
</div>

              
       
            


        );
    }



    constructor(props, context) {
        super(props, context);

//this.onClick= this.onClick.bind(this);
this.handleClientLoad= this.handleClientLoad.bind(this);
this.handleAuthClick= this.handleAuthClick.bind(this);
//this.sendEmail= this.sendEmail.bind(this);


    }



        onClick = (event) =>{

//event.preventDefault();

            const params = {
                // The ID of the spreadsheet to update.
                spreadsheetId: SPREADSHEET_ID,
                // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
                range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
                // How the input data should be interpreted.
                valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
                // How the input data should be inserted.
                insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS,


            };
// Google sheets seemed to expect a 2d array so I tried this hack
var abbreviatedState ={
    name : this.state.fullName,
   email : this.state.email,
    pies: this.state.pies,
    totalPies: this.state.totalPricePies,
    fries: this.state.fries,
    totalFries: this.state.totalPriceFries,
    total : this.state.totalPriceFries+this.state.totalPricePies,
    paymentInfo: this.state.paymentInfo,
    
   
    
    phone: this.state.phoneNumber,
    address: this.state.address,
    city: this.state.city,
    zip: this.state.zip,
    orderTime: new Date().toLocaleString()
}
console.log(abbreviatedState.city)

var orderInfo= Object.values(abbreviatedState);
orderInfo= orderInfo.map(x => [x,'']);
console.log(orderInfo);
            const valueRangeBody = {
               'majorDimension': 'COLUMNS', //log each entry as a new row (vs column)
                'values': orderInfo//convert the object's values to an array

            };


            let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
            request.then(function (response) {

                console.log(response.result);
            }, function (reason) {
                console.error('error: ' + reason.result.error.message);
            });


this.sendEmail(abbreviatedState);


        }
        sendEmail= (bob)=>{

     
        emailjs.send('gmail','template_kmmjAIKP',bob, process.env.REACT_APP_EMAILJS_ID).then(res => {
                                                      	console.log('Email successfully sent!')
                                                    	})
                                                    	// Handle errors here however you like, or use a React error boundary
                                                        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
                                                        
                                                        
                                                        // bring up confirmation page
                                                            this.props.foo();

                                                        
                                                    }

returnToOrderPage =() =>{
    this.props.foo('ordered');
}

returnToCustomerInfo=()=>
{
    this.props.foo('infoSubmitted');

}

returnToPaymentInfo=() =>
{
    
    this.props.foo('paymentSubmitted');
}
   


    componentDidMount() {
        this.handleClientLoad();

    }


    handleClientLoad=()=>
    {
      gapi.load('client:auth2', this.initClient) ;

    }



   updateSigninStatus (isSignedIn){

       if (isSignedIn) {
          // authorizeButton.style.display = 'none';
          // signoutButton.style.display = 'block';

            // makeApiCall();
        } else {
          //  authorizeButton.style.display = 'block';
           // signoutButton.style.display = 'none';
            this.handleAuthClick();
        }



    }

    handleAuthClick (event){
    
        gapi.auth2.getAuthInstance().signIn();
    }

    handleSignoutClick (event) {
        gapi.auth2.getAuthInstance().signOut();
    }

    initClient=()=>{
       gapi.client.init({
            'apiKey': API_KEY,
            'clientId': CLIENT_ID,
            'scope': SCOPE,
            'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        }).then(()=> {
            gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
           this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

//authorizeButton.onclick = this.handleAuthClick;
           //signoutButton.onclick = this.handleSignoutClick;

             });


    }







}
export default Review

