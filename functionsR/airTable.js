exports.handler=async =>{

    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keyvA6Il24RapkkSh'}).base('appbTi7sjlAEMnht7');
    
    
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