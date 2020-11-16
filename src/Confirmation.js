import React from "react";
import Cookies from 'universal-cookie';
class Confirmation extends React.Component {

    componentDidMount() {
        var cookie = new Cookies();
        var info = cookie.get('data');

        const data = info

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

        cookie.remove('data');
    }

    render() {

        return (

            <h1 className="block">Your Pizza is on its way!</h1>
            
           

        );
    }
        
    
}
export default Confirmation