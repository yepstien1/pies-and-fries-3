

exports.handler=async (event,context)=>{
console.log(event);
console.log(context);

    var Airtable = require('airtable');
   // console.log('key' + process.env.REACT_APP_AIR_TABLE_API_KEY)
   var key=process.env.REACT_APP_AIR_TABLE_API_KEY;
   key='keyjoByLiYegLzgi0';
    
    var base = new Airtable({apiKey:key}).base('appbTi7sjlAEMnht7');
  var info=/*JSON.parse(event.body)||*/{"name":"fakedata"};
    console.log("body" +event.body)
    console.log(info.name);
 /*   const airTablePromise=
base('Table 1').create([
    {
      "fields": {
        "Name": info.name,
        "Email": "howdy.com",
        "Total Fries Cost": 43
      }
    },
    {
      "fields": {
        "Name": "brrrrb",
        "Email": "jkshaal",
        "Total Fries Cost": 29
      }
    }
  ])
  console.log("Request issued", airTablePromise)

   airTablePromise.then(records => {
  console.info("Worked!", records)
  records.forEach(x => console.log(x.getId()))
}, err => {
  console.error(err)
}) 
console.log("hi from end of func")
*/




const fetch = require("node-fetch")
const data = {"records":[{"id":"rec6fKsp9dcLh2UwZ","fields":{"Name":"bomb","Email":"bob@bob.com","Total Fries Cost":23}},{"id":"recL6wFUPMUiYgq9v","fields":{"Name":"howdy","Email":"howdy.com","Total Fries Cost":43}}]}
const neder =fetch('https://api.airtable.com/v0/appbTi7sjlAEMnht7/Table%201', {
        method: 'patch',
        body:    JSON.stringify(data),
		'Authorization' : `Bearer  ${process.env.REACT_APP_AIR_TABLE_API_KEY}`,
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));
	console.log("Request issued", neder)

   neder.then(records => {
  console.info("Worked!", records)
  records.forEach(x => console.log(x.getId()))
}, err => {
  console.error(err)
}) 


}