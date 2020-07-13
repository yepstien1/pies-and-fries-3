


const bob = process.env;

const gapi =require('googleapis');
exports.handler =async (event,orderInfo )=>{
    handleClientLoad();
    
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


              const params = {
                // The ID of the spreadsheet to update.
                spreadsheetId: bob.REACT_APP_GOOGLESHEET_ID,
                // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
                range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
                // How the input data should be interpreted.
                valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
                // How the input data should be inserted.
                insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS,


            };
// Google sheets seemed to expect a 2d array so I tried this hack
var abbreviatedState ={
    name : 'yakove',
   email : 'test',
   
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

function handleClientLoad ()
{
  gapi.load('client:auth2', this.initClient) ;

}

