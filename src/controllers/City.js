import React, { Component, Fragment } from 'react';
import "./css/city.css";
import Navbar from "../components/Navbar";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {readCity} from '../redux/actions/city'
import Item from '../components/modal/city/Item'
class City extends Component {
    state = {}
    componentDidMount(){
        this.props.dispatch(readCity())
    }
    render() {
        const {cities} = this.props
        const listCity = cities.map((city) => <Item city={city}/>);
        return (
            <Fragment>
            <Navbar />
            <div className="container">
            <div className="row">
              <div className="col-lg-8" style={{fontSize:'32px', marginTop:'auto', fontFamily:'MaisonNeueExtended-Bold,sans-serif'}}><h2>
              MANAGE CITY
              </h2>
              </div>
              <div className="col-lg-4" style={{textAlign:'right'}}>
              <button class="btn btn-md btn-success" data-toggle='modal' data-target='#createModal' style={{borderRadius:25, fontSize:'12px', color:'white'}}>ADD CATEGORY</button>
              </div>
            </div>
            <div className="row">
            <table className="table table-bordered table-hover table-responsive">
            <thead className="thead-light">
              <tr>
                <th scope="col">Manage</th>
                <th scope="col">ID</th>
                <th scope="col">Name City</th>
                <th scope="col">Name Province</th> 
              </tr>
            </thead>
            <tbody>
              {listCity}
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
      cities: state.city.cities
    }
  }
export default withRouter(connect(mapStateToProps)(City));