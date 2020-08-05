const { createSemicolonClassElement } = require('typescript');

exports.handler=async (event,context)=>{
console.log(event);
console.log(context);

    var Airtable = require('airtable');
    var base = new Airtable({apiKey: process.env.REACT_APP_AIR_TABLE_API_KEY}).base('appbTi7sjlAEMnht7');
    console.log("event"+event);
    console.log("context"+context);
    console.log("body" +context.body)
base('Table 1').create([
    {
      "fields": {
        "Name": "howdy",
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