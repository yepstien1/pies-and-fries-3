import React from "react";

class Confirmation extends React.Component {

    componentDidMount() {

        const queryString = window.location.search;
        console.log("wls:" + JSON.stringify(queryString));
        const urlParams = new URLSearchParams(queryString);
        const data = JSON.parse(urlParams.get('info'));

        fetch("https://pies-and-fries.netlify.app/.netlify/functions/airTable", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        fetch("https://pies-and-fries.netlify.app/.netlify/functions/sendEmail", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }

    render() {

        return (

            <h1 className="block">Your Pizza is on its way!</h1>
            
           

        );
    }
        
    
}
export default Confirmation