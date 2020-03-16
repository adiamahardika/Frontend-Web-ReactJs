import React, { Component, Fragment } from 'react';
import "./css/product.css";
import {connect} from 'react-redux'
import {readProduct, createProduct} from '../redux/actions/product'
import { withRouter } from "react-router"
import Item from '../components/modal/product/Item'
import Navbar from "../components/Navbar"
import Add from "../components/modal/product/Add"
import Delete from "../components/modal/product/Delete"
import Edit from '../components/modal/product/Edit';
class Product extends Component {
    state = {
      selectProductDelete: [],
      selectProductEdit: []
    }
    componentDidMount(){
        // if(!localStorage.getItem('token'))
        //     this.props.history.push('/login')
        this.props.dispatch(readProduct())
    }
    onSelectProductDelete = (product) => {
      this.setState({
        selectProductDelete: product
      })
    }
    onSelectProductEdit = (product) => {
      this.setState({
        selectProductEdit: product
      })
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
    const listproduct = products.map((product, index) => <Item key={index} product={product} parseToRupiah={this.parseToRupiah} onSelectProductEdit={this.onSelectProductEdit} onSelectProductDelete={this.onSelectProductDelete}/>);
        return (
          <Fragment>
            <Navbar />
            <div className="container">
            <div className="row">
              <div className="col-lg-8" style={{fontSize:'32px', marginTop:'auto', fontFamily:'MaisonNeueExtended-Bold,sans-serif'}}><h2>
              MANAGE PRODUCT
              </h2>
              </div>
              <div className="col-lg-4" style={{textAlign:'right'}}>
              <button class="btn btn-md btn-success" data-toggle='modal' data-target='#createModal' style={{borderRadius:25, fontSize:'12px', color:'white'}}>ADD PRODUCT</button>
              </div>
            </div>
            <div className="row">
            <table className="table table-bordered table-hover table-responsive">
            <thead className="thead-light">
              <tr>
                <th scope="col">Manage</th>
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
          <Add />
          <Delete product={this.state.selectProductDelete}/>
          <Edit product={this.state.selectProductEdit}/>
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