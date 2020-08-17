

exports.handler=async (event,context)=>{
console.log(event);
console.log(context);

    var Airtable = require('airtable');
    var base = new Airtable({apiKey:process.env.REACT_APP_AIR_TABLE_API_KEY}).base('appbTi7sjlAEMnht7');
  var info=JSON.parse(event.body);
    console.log("body" +event.body)
    console.log(info.name);
    //may want to refomat at a later point
    //info.totalPies and totalFries a string for some reason
   const airTablePromise=
base('Table 1').create([
    {
      "fields": {
        "Name": info.name,
        "Email": info.email,
        "Total Pizza cost": info.totalPies,
        "Total Fries Cost": info.totalFries,
        "Quantity Pies": info.pies,
        "Quantity Fries": info.fries,
        "Phone": info.phone,
        "Address": info.address,
        "City" : info.city,
        'Zip': info.zip,
        "Time" :info.orderTime


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