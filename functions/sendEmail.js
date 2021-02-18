exports.handler = async event => {

    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    const sgMail = require('@sendgrid/mail');
    var info = JSON.parse(event.body);
    sgMail.setApiKey(process.env.REACT_APP_SENDGRID);
    const emailText = `Pies : ${info.pies}  Fries :${info.fries}  Price total : ${info.total}`
    const emailTextComp = `Pies : ${info.pies}  Fries :${info.fries}  Price total : ${info.total} Address :   ${info.address}  ${info.city}
${info.zip}  Phone : ${info.phone}   @  ${info.orderTime}`
    const msg = [{
        to: `pizzaduringcovid@gmail.com`,
        from: 'pizzaduringcovid@gmail.com',
        subject: 'Order processed',
        text: `${emailTextComp}`,
        html: `<strong>${emailTextComp}</strong>`,
    },
        {
            to: info.email,
            from: 'pizzaduringcovid@gmail.com',
            subject: 'Pizza Order Confirmed!',
            text: `${emailText}`,
            html: `<strong>${emailText}</strong>`,
        },
    ];


    const promise = sgMail.send(msg);
    console.log("Request issued", promise)
    await promise.then(records => {
        console.info("Worked!", records)

    }, err => {
        console.error(err)
    })

    console.log("hi from end of func");


}
  

