import React, { Component, Fragment } from 'react';
import "./css/product.css";
import {connect} from 'react-redux'
import {readProduct} from '../redux/actions/product'
import { withRouter } from "react-router"
import Item from '../components/modal/product/Item'
import Navbar from "../components/Navbar"

class Product extends Component {
    componentDidMount(){
        if(!localStorage.getItem('token')){
            this.props.history.push('/login')
        }else{
        this.props.dispatch(readProduct())}
    }

    parseToRupiah(number)
    {
	  var rupiah = '';		
	  var numberrev = number.toString().split('').reverse().join('')
	  for(var i = 0; i < numberrev.length; i++) if(i%3 === 0) rupiah += numberrev.substr(i,3)+'.'
	  return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')
    }
    render() {
    const { products } = this.props
    const listproduct = products.map((product, index) => <Item key={index} product={product} parseToRupiah={this.parseToRupiah}/>);
        return (
          <Fragment>
            <Navbar />
            <div class="container">
            <div class="row">
              <div class="col-lg-8">
              MANAGE PRODUCT
              </div>
              <div class="col-lg-4">
              MANAGE PRODUCT
              </div>
            </div>
            <div class="row">
            <table class="table table-bordered table-hover table-responsive">
            <thead class="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name Product</th>
                <th scope="col">Image</th>
                <th scope="col">Card Desc</th>
                <th scope="col">Short Desc</th>
                <th scope="col">Long Desc</th>
                <th scope="col">Ingredints</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Group</th>
                <th scope="col">Date Added</th>
                <th scope="col">Date Updated</th> 
              </tr>
            </thead>
            <tbody>
              {listproduct}
            </tbody>
          </table>
          </div>
          </div>
          </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      products: state.products.products
    }
  }

export default withRouter(connect(mapStateToProps)(Product))