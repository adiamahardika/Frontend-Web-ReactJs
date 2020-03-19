import React, { Component, Fragment } from 'react';
import "./css/product.css";
import {connect} from 'react-redux';
import {readProduct} from '../redux/actions/product';
import { withRouter } from "react-router-dom";
import Item from '../components/modal/product/Item';
import Navbar from "../components/Navbar";
import Add from "../components/modal/product/Add";
import Delete from "../components/modal/product/Delete";
import Edit from '../components/modal/product/Edit';
import querystring from 'query-string'
import Pagination from '../components/Pagination'
class Product extends Component {
    state = {
      category: "",
      product: "",
      by: "",
      paginateId: "",
      selectProductDelete: [],
      selectProductEdit: []
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
    onCategory = event => {
      if (this.state.product !== "" && this.state.by !== "") {
        this.props.history.push(`/product/?category=${event.target.value}&product=${this.state.product}&sortBy=${this.state.by}`)
      } else if (this.state.product !== "") {
        this.props.history.push(`/product/?category=${event.target.value}&product=${this.state.product}`)
      } else if (this.state.by !== "") {
        this.props.history.push(`/product/?category=${event.target.value}&sortBy=${this.state.by}`)
      } else {
        this.props.history.push(`/product/?category=${event.target.value}`)
      }
      this.props.dispatch(readProduct(event.target.value, this.state.product, this.state.by, this.state.paginateId))
    }
  
    onProduct = event => {
      if (this.state.category !== "" && this.state.by !== "") {
        this.props.history.push(`/product/?category=${this.state.category}&product=${event.target.value}&sortBy=${this.state.by}`)
      } else if (this.state.category !== "") {
        this.props.history.push(`/product/?category=${this.state.category}&product=${event.target.value}`)
      } else if (this.state.by !== "") {
        this.props.history.push(`/product/?product=${event.target.value}&sortBy=${this.state.by}`)
      } else {
        this.props.history.push(`/product/?product=${event.target.value}`)
      }
      this.props.dispatch(readProduct(this.state.category, event.target.value, this.state.by, this.state.paginateId))
    }
  
    onBy = event => {
      if (this.state.category !== "" && this.state.product !== "") {
        this.props.history.push(`/product/?category=${this.state.category}&product=${this.state.product}&sortBy=${event.target.value}`)
      } else if (this.state.category !== "") {
        this.props.history.push(`/product/?category=${this.state.category}&sortBy=${event.target.value}`)
      } else if (this.state.product !== "") {
        this.props.history.push(`/product/?product=${this.state.product}&sortBy=${event.target.value}`)
      } else {
        this.props.history.push(`/product/?sortBy=${event.target.value}`)
      }
      this.props.dispatch(readProduct(this.state.category, this.state.product, event.target.value, this.state.paginateId))
    }
    componentDidMount(){
      if(!localStorage.getItem('token'))
          this.props.history.push('/login')
      this.props.dispatch(readProduct())
      var id = querystring.parse(this.props.location.search);
        var value = querystring.parse(this.props.location.search);
        if (id.paginateId !== undefined) {
            let paginateId = id.paginateId
            this.props.dispatch(readProduct(paginateId))
        } else if (value.category !== undefined) {
            let category = value.category
            let product = this.state.product
            let by = this.state.by
            this.props.dispatch(readProduct(category, product, by))
        } else if (value.product !== undefined) {
            let category = this.state.category
            let product = value.product
            let by = this.state.by
            this.props.dispatch(readProduct(category, product, by))
        } else if (value.by !== undefined) {
            let category = this.state.category
            let product = this.state.product
            let by = value.by
            this.props.dispatch(readProduct(category, product, by))
        }
    }
    parseToRupiah(number)
    {
	  var rupiah = '';		
	  var numberrev = number.toString().split('').reverse().join('')
	  for(var i = 0; i < numberrev.length; i++) if(i%3 === 0) rupiah += numberrev.substr(i,3)+'.'
	  return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')
    }
    
    render() {
    const { products, categorys } = this.props
    const listproduct = products.map((product, index) => <Item key={index} product={product} parseToRupiah={this.parseToRupiah} onSelectProductEdit={this.onSelectProductEdit} onSelectProductDelete={this.onSelectProductDelete}/>);
        return (
          <Fragment>
            <Navbar />
            <div className="container">
            <div className="row">
              <div className="col-lg-3" style={{fontSize:'32px', margin:'auto', fontFamily: 'Archivo Black,sans-serif', color:'#6c757d'}}><h2>
              MANAGE PRODUCT
              </h2>
              </div>
              <div className="col-lg-3" style={{margin:'auto'}}>
              <input
                  className="form-control"
                  style={{ border: "1px solid #ced4da" }}
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.onProduct}
              />
              </div>
              <div className="col-lg-2" style={{margin:'auto'}}>
                <select className="form-control" style={{ border: "1px solid #ced4da" }} defaultValue={"DEFAULT"} name="category" onChange={this.onCategory} as="select">
                  <option value="">Filter All</option>
                  {categorys.map((category) =>
                    <option value={category.id}>
                      {category.name_category}
                    </option>
                  )}
                </select>
              </div>
              <div className="col-lg-2" style={{margin:'auto'}}>
                <select className="form-control" style={{ border: "1px solid #ced4da" }} defaultValue={"DEFAULT"} name="by" onChange={this.onBy} as="select">
                  <option value="">Sort All</option>
                  <option value="name_product">Name</option>
                  <option value="price">Price</option>
                </select>
              </div>
              <div className="col-lg-2" style={{textAlign:'right', margin:'auto'}}>
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
      products: state.products.products,
      categorys: state.category.categorys
    }
  }

export default withRouter(connect(mapStateToProps)(Product))