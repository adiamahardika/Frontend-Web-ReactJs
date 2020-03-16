import React, { Component, Fragment } from 'react';
import "./css/subcity.css";
import Navbar from "../components/Navbar";
class SubCity extends Component {
    state = {}
    render() {
        return (
            <Fragment>
            <Navbar/>
            <div>
                <h1>SUBCITY!</h1>
            </div>
            </Fragment>
        );
    }
}

export default SubCity;