import React, { Component, Fragment } from 'react';
import "./css/category.css";
import Navbar from "../components/Navbar";

class Category extends Component {
    state = {}
    render() {
        return (
            <Fragment>
            <Navbar />
            <div>
                <h1>CATEGORY!</h1>
            </div>
            </Fragment>
        );
    }
}

export default Category;