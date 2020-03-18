import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import "./css/navbar.css";
import Logo from '../images/logo-makyur-06.png'

class Navbar extends Component {
    state = {}
    onLogout() {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        this.props.history.push('/login');
    }

    render() {
        return (
                <nav class='navbar sticky-top navbar-expand-lg' style={{ background: 'white' }}>
                <div class='container'>
                <div class="col-lg-2">
                <Link class="navbar-brand" to="#">
                <img src={Logo} height="70" class="d-inline-block align-top" alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                </div>
                <div class="col-lg-10">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                        <Link class="nav-link" to="/product">Product 
                        <span class="sr-only">(current)</span>
                        </Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/category">Category</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/account">User</Link>
                        </li>
                        <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Place
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link class="dropdown-item" to="/province">Province</Link>
                            <Link class="dropdown-item" to="/city">City</Link>
                            <Link class="dropdown-item" to="/sub-city">Sub-City</Link>
                        </div>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="#">History Order</Link>
                        </li>
                    </ul>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;