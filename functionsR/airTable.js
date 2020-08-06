

exports.handler=async (event,context)=>{
console.log(event);
console.log(context);

    var Airtable = require('airtable');
    var base = new Airtable({apiKey: process.env.REACT_APP_AIR_TABLE_API_KEY}).base('appbTi7sjlAEMnht7');
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
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });
    
}