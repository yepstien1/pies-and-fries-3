

exports.handler=async (event,context)=>{
console.log(event);
console.log(context);

    var Airtable = require('airtable');
   // console.log('key' + process.env.REACT_APP_AIR_TABLE_API_KEY)
   var key=process.env.REACT_APP_AIR_TABLE_API_KEY;
    
    var base = new Airtable({apiKey:key}).base('appbTi7sjlAEMnht7');
  var info=/*JSON.parse(event.body)||*/{"name":"fakedata"};
    console.log("body" +event.body)
    console.log(info.name);
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
  ]).then(error=>(console.log(error)))
    
}