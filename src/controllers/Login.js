import React, { Component } from 'react';
import axios from 'axios';
import './css/login.css';
import Logo from '../images/logo-makyur-06.png'
require ('dotenv').config();
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.props.history.push('/product');
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        axios
            .post(`${process.env.REACT_APP_URL}account/login`, this.state)
            .then(res => {
                localStorage.setItem('token', res.data.result.token);
                localStorage.setItem('id', res.data.result.id);
                localStorage.setItem('role', res.data.result.role);
                this.props.history.push('/product');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
            <header class='header'>
    <img src={Logo} class="logoMakyur d-inline-block align-top" alt="logo-makyur.png" />          
            </header>
            <div class="card">
            <div class="card-body">
            <div class="container">
                <h4>Login</h4>
                <div class="row justify-content-md-center">
                    <div class="col-md-12">
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" placeholder="ex: youremail@mail.com" name="email" onChange={this.onChange} />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Enter password" name="password" onChange={this.onChange} />
                            </div>
                            <button type="submit" class="btn btn-primary" style={{
                                backgroundColor: '#f0bbcb!important',
                                color: "white",
                                width: "100%",
                            }}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Login;