import React, { Component, Fragment } from 'react';
import "./css/province.css";
import Navbar from "../components/Navbar";
class Province extends Component {
    state = {}
    render() {
        return (
            <Fragment>
            <Navbar/>
            <div>
                <h1>PROVINCE!</h1>
            </div>
            </Fragment>
        );
    }
}

export default Province;