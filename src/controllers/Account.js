import React, { Component, Fragment } from 'react';
import "./css/account.css";
import Navbar from "../components/Navbar";
class Account extends Component {
    state = {}
    render() {
        return (
            <Fragment>
            <Navbar/>
            <div>
                <h1>ACCOUNT!</h1>
            </div>
            </Fragment>
        );
    }
}

export default Account;