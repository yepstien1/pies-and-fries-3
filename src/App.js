import React from 'react';
//import Link from 'react-router'

import OrderPage from './OrderPage.js'
import CustomerInfo from './CustomerInfo.js'

import Review from './Review'
import Confirmation from './Confirmation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

import './App.css';

class App extends React.Component {
    componentDidMount() {
        document.title = "Pies and Fries"
    }


    state = {
        clicked: false,
        ordered: false,
        infoSubmitted: false,
        paymentSubmitted: false,
        confirmed: false,
        admin: false
    }

    conf = false;


    fetchFromWelcome = (childData) => {
        this.setState({clicked: childData})

    }
    fetchFromOrder = (childData) => {
        this.setState({
            ordered: childData.ordered, pies: childData.pies, fries: childData.fries,
            totalPricePies: childData.totalPricePies,
            totalPriceFries: childData.totalPriceFries,
        })

    }

    fetchFromCustomer = (childData) => {
        this.setState({...childData})


    }


    fetchFromPayment = (childData) => {
        this.setState({...childData})
    }

    fetchFromReview = (childData) => {
        if (childData === 'ordered')
            this.setState({ordered: false})
        else if (childData === 'infoSubmitted')
            this.setState({infoSubmitted: false})
        else if (childData === 'paymentSubmitted')
            this.setState({paymentSubmitted: false})
    }


    getCookie = () => {
        var cookie = new Cookies();
        // get urlparams to check for return from user cancelled
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const canceled = urlParams.get('info');
        console.log("canceled" + canceled)
        if (canceled === 'canceled') {
            cookie.remove('data')

        } else if (canceled === 'confirmed') {

            this.conf = true;

        }


    }


    render() {

        this.getCookie();
        let element;
        if (this.conf)
            element = <Confirmation/>


        else if (!this.state.clicked)
            element = <Welcome methodToPassToChild={this.fetchFromWelcome}/>
        else if (!this.state.ordered)
            element = <OrderPage methodToPassToChild={this.fetchFromOrder}/>
        else if (!this.state.infoSubmitted)
            element = <CustomerInfo methodToPassToChild={this.fetchFromCustomer}/>
        else if (!this.state.paymentSubmitted)
            element = <Review  {...this.state} methodToPassToChild={this.fetchFromReview}/>


        return (


            <div>
                {element}

            </div>

        )
    }
}

class Welcome extends React.Component {
    state = {
        clicked: false
    }

    render() {
        return (

            <div className='block'>
                <div className="text-welcome">
                    <h1><span className="text">Welcome to Pies and Fries</span></h1>

                    <h4><span
                        className="text">This the EASIEST and FASTEST way to order PIZZA and FRIES for Delivery</span>
                    </h4>
                </div>


                <button type="submit" onClick={this.submit}>Click here to Eat</button>

            </div>


        )
    }

    submit = () => {
        this.setState({clicked: true}, () => {
                this.passUpToParent();
            }
        );


    }
    passUpToParent = () => {
        this.props.methodToPassToChild(this.state.clicked)
    }
}


export default App;
