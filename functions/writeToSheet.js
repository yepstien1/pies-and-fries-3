


const bob = process.env;
const gapi =require('googleapis');

exports.handler =async (event,orderInfo )=>{

 
    gapi.initClient=()=>{
        gapi.client.init({
             'apiKey': bob.REACT_APP_GOOGLE_API_KEY,
             'clientId': bob.REACT_APP_CLIENT_ID,
             'scope': "https://www.googleapis.com/auth/spreadsheets",
             'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
         }).then(()=> {
             gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
            this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
 
 //authorizeButton.onclick = this.handleAuthClick;
            //signoutButton.onclick = this.handleSignoutClick;
 
              });


         
    return {
        statusCode:200,
        body: bob.REACT_APP_GOOGLESHEET_ID

    }
    }

    
  function  updateSigninStatus (isSignedIn){

    if (isSignedIn) {
       // authorizeButton.style.display = 'none';
       // signoutButton.style.display = 'block';

         // makeApiCall();
     } else {
       //  authorizeButton.style.display = 'block';
        // signoutButton.style.display = 'none';
         handleAuthClick();
     }



 }
}
function handleAuthClick (event){
    
    gapi.auth2.getAuthInstance().signIn();
}
