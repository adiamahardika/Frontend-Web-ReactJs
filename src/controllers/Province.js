import React, { Component, Fragment } from 'react';
import "./css/province.css";
import Navbar from "../components/Navbar";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {readProvince} from '../redux/actions/province'
import Item from '../components/modal/province/Item'
class Province extends Component {
    state = {}
    componentDidMount(){
        this.props.dispatch(readProvince())
    }

    render() {
        const {provinces} = this.props
        const listProvince = provinces.map((province) => <Item province={province}/>)
        return (
            <Fragment>
            <Navbar/>
                <div className="container">
                <div className="row">
                <div className="col-lg-8" style={{fontSize:'32px', marginTop:'auto', fontFamily:'MaisonNeueExtended-Bold,sans-serif'}}><h2>
                MANAGE PROVINCE
                </h2>
                </div>
                <div className="col-lg-4" style={{textAlign:'right'}}>
                <button class="btn btn-md btn-success" data-toggle='modal' data-target='#createModal' style={{borderRadius:25, fontSize:'12px', color:'white'}}>ADD PROVINCE</button>
                </div>
                </div>
                <div className="row" style={{marginLeft: "125px"}}>
                <table className="table table-bordered table-hover table-responsive">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Manage</th>
                    <th scope="col">ID</th>
                    <th scope="col">Provinsi</th> 
                </tr>
                </thead>
                <tbody>
                {listProvince}
                </tbody>
            </table>
            </div>
            </div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
      provinces: state.province.provinces
    }
  }
export default withRouter(connect(mapStateToProps)(Province));