import React, { Component } from 'react';
import "./css/home.css";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import Sidebar from "../components/Sidebar"
import Card from "../components/Card"

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <Navbar />
                </div>
                <div className="col-12">
                    <Card />
                </div>
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;