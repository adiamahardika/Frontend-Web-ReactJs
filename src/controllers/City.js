import React, { Component, Fragment } from 'react';
import "./css/city.css";
import Navbar from "../components/Navbar";

class City extends Component {
    state = {}
    render() {
        return (
            <Fragment>
            <Navbar />
            <div>
                <h1>CITY!</h1>
            </div>
            </Fragment>
        );
    }
}

export default City;