import React, { Component, Fragment } from 'react';
import "./css/category.css";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {readCategory} from '../redux/actions/category'
import Item from '../components/modal/category/Item'
import Navbar from "../components/Navbar";
import Add from "../components/modal/category/Add"
import Edit from "../components/modal/category/Edit"
import Delete from "../components/modal/category/Delete"
class Category extends Component {
    state = {
      selectCategoryEdit: [],
      selectCategoryDelete: []
    }
    componentDidMount(){
        this.props.dispatch(readCategory())
    }

    onSelectCategoryEdit = category => {
      this.setState({
          selectCategoryEdit: category
      })
    }

    onSelectCategoryDelete = category=> {
      this.setState({
        selectCategoryDelete: category
      })
    }
    render() {
        const {categorys} = this.props
        const listCategory = categorys.map((category, index) => <Item key={index} category={category} onSelectCategoryEdit={this.onSelectCategoryEdit} onSelectCategoryDelete={this.onSelectCategoryDelete}/>);
        return (
            <Fragment>
            <Navbar />
            <div className="container">
            <div className="row">
              <div className="col-lg-8" style={{fontSize:'32px', marginTop:'auto', fontFamily:'MaisonNeueExtended-Bold,sans-serif'}}><h2>
              MANAGE CATEGORY
              </h2>
              </div>
              <div className="col-lg-4" style={{textAlign:'right'}}>
              <button class="btn btn-md btn-success" data-toggle='modal' data-target='#createModal' style={{borderRadius:25, fontSize:'12px', color:'white'}}>ADD CATEGORY</button>
              </div>
            </div>
            <div className="row" style={{marginLeft: "125px"}}>
            <table className="table table-bordered table-hover table-responsive">
            <thead className="thead-light">
              <tr>
                <th scope="col">Manage</th>
                <th scope="col">ID</th>
                <th scope="col">Name Category</th> 
              </tr>
            </thead>
            <tbody>
              {listCategory}
            </tbody>
          </table>
          </div>
          </div>
          <Add/>
          <Edit category={this.state.selectCategoryEdit}/>
          <Delete category={this.state.selectCategoryDelete}/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      categorys: state.category.categorys
    }
  }

export default withRouter(connect(mapStateToProps)(Category));