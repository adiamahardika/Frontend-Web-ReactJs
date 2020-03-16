import React, { Component, Fragment } from 'react';
import "./css/home.css";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import Sidebar from "../components/Sidebar"
import Card from "../components/Card"

class Home extends Component {
    state = {}

    componentDidMount() {
        // localStorage.setItem('id', 0);
    }
    render() {
        return (
            <Fragment>
                <Navbar />
            <div className="row">
            <div className="col-12">
                <Card />
            </div>
            <div className="col-12">
                <Footer />
            </div>
            </div>
            </Fragment>
        );
    }
}

export default Home;