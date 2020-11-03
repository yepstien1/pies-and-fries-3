import React from 'react';

import OrderPage from './OrderPage.js'
import CustomerInfo from './CustomerInfo.js'

import Review from './Review'
import Confirmation from './Confirmation'
import 'bootstrap/dist/css/bootstrap.min.css';


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
        confirmed: false
    }


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
        else if (childData === 'confirmed') {
            this.setState({confirmed: true})
        }


    }


    render() {
        //todo for testing purps
        const queryString = JSON.stringify(window.location.search)
        console.log("querystring:" + queryString)
        const urlParams = new URLSearchParams(queryString);
        console.log("urlParams:" + JSON.stringify(urlParams));
        var test = urlParams.get('pies')
        console.log(test);

        let element;
        if (!this.state.clicked)
            element = <Welcome methodToPassToChild={this.fetchFromWelcome}/>
        else if (!this.state.ordered)
            element = <OrderPage methodToPassToChild={this.fetchFromOrder}/>
        else if (!this.state.infoSubmitted)
            element = <CustomerInfo methodToPassToChild={this.fetchFromCustomer}/>
        else if (!this.state.paymentSubmitted)
            element = <Review  {...this.state} methodToPassToChild={this.fetchFromReview}/>

        else
            element = <Confirmation/>

        return (


            <div>
                <h1>{test}</h1>
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
                <h1><span className="text">Welcome to Pies and Fries</span></h1>

                <h4><span className="text">This the EASIEST and FASTEST way to order PIZZA and FRIES for Delivery</span>
                </h4>
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
