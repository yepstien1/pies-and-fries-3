

exports.handler=async (event,context)=>{
console.log(event);
console.log(context);

    var Airtable = require('airtable');
    var base = new Airtable({apiKey:process.env.REACT_APP_AIR_TABLE_API_KEY}).base('appbTi7sjlAEMnht7');
  var info=JSON.parse(event.body);
    console.log("body" +event.body)
    console.log(info.name);
   const airTablePromise=
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

   await airTablePromise.then(records => {
  console.info("Worked!", records)
  records.forEach(x => console.log(x.getId()))
}, err => {
  console.error(err)
}) 
console.log("hi from end of func")




}