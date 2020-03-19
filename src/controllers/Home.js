import React, { Component, Fragment } from 'react';
import "./css/home.css";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import Sidebar from "../components/Sidebar"
import Card from "../components/Card"
import Contact from "../components/Contact"
// import { Form } from 'react-bootstrap';

class Home extends Component {
    state = {}

    componentDidMount() {
        // localStorage.setItem('id', 0);
    }
    render() {
        return (
            <Fragment>
                <Navbar />
                <Card />
                <Footer />
                <Contact />
            </Fragment>
        );
    }
}

export default Home;