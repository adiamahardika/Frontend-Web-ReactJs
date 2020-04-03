import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../src/redux/store';
// import logo from './logo.svg';
import './App.css';
import Home from "./controllers/Home"
import Account from "./controllers/Account"
import Product from "./controllers/Product"
import Category from "./controllers/Category"
import Province from "./controllers/Province"
import City from "./controllers/City"
import SubCity from "./controllers/SubCity"
import Login from "./controllers/Login"
import History from "./controllers/History"

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/account" component={Account} />
      <Route path="/product" component={Product} />
      <Route path="/category" component={Category} />
      <Route path="/province" component={Province} />
      <Route path="/city" component={City} />
      <Route path="/sub-city" component={SubCity} />
      <Route path="/login" component={Login} />
      <Route path="/history" component={History} />
    </Router>
    </Provider>
  );
}

export default App;
