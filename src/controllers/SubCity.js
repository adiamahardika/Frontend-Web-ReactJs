import React, { Component, Fragment } from 'react';
import "./css/subcity.css";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {readSubCity} from '../redux/actions/subCity'
import Item from '../components/modal/subcity/Item'
import Navbar from "../components/Navbar";
class SubCity extends Component {
    state = {}
    componentDidMount(){
        this.props.dispatch(readSubCity())
    }
    render() {
        const {subCities} = this.props
        const listSubCity = subCities.map((subCity) => <Item subCity={subCity}/>)
        return (
            <Fragment>
            <Navbar/>
            <div className="container">
                <div className="row">
                <div className="col-lg-8" style={{fontSize:'32px', marginTop:'auto', fontFamily:'MaisonNeueExtended-Bold,sans-serif'}}><h2>
                MANAGE SUB CITY
                </h2>
                </div>
                <div className="col-lg-4" style={{textAlign:'right'}}>
                <button class="btn btn-md btn-success" data-toggle='modal' data-target='#createModal' style={{borderRadius:25, fontSize:'12px', color:'white'}}>ADD SUB CITY</button>
                </div>
                </div>
                <div className="row">
                <table className="table table-bordered table-hover table-responsive">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Manage</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name Sub City</th> 
                    <th scope="col">Name City</th> 
                </tr>
                </thead>
                <tbody>
                {listSubCity}
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
      subCities: state.subCity.subCities
    }
  }
export default withRouter(connect(mapStateToProps)(SubCity));