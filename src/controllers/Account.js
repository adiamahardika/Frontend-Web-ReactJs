import React, { Component, Fragment } from 'react';
import "./css/account.css";
import {connect} from 'react-redux';
import { readAccount } from '../redux/actions/account';
import { withRouter } from 'react-router-dom';
import Item from '../components/modal/account/Item';
import Navbar from "../components/Navbar";
import Add from "../components/modal/account/Add";
import Delete from "../components/modal/account/Delete";
import Edit from "../components/modal/account/Edit";
class Account extends Component {
    state = {
        selectAccountDelete:[],
        selectAccountEdit:[]
    }
    componentDidMount(){
        this.props.dispatch(readAccount())
    }
    onSelectAccountDelete = (account) => {
        this.setState({
            selectAccountDelete: account
        })
    }
    onSelectAccountEdit = (account) => {
        this.setState({
            selectAccountEdit: account
        })
    }
    render() {
        const {accounts} = this.props
        const listAccount = accounts.map((account, index)=> <Item key={index} account={account} onSelectAccountEdit={this.onSelectAccountEdit}onSelectAccountDelete={this.onSelectAccountDelete}/>)
        return (
            <Fragment>
            <Navbar/>
            <div className="container">
            <div className="row">
              <div className="col-lg-8" style={{fontSize:'32px', marginTop:'auto', fontFamily:'MaisonNeueExtended-Bold,sans-serif'}}><h2>
              MANAGE ACCOUNT
              </h2>
              </div>
              <div className="col-lg-4" style={{textAlign:'right'}}>
              <button class="btn btn-md btn-success" data-toggle='modal' data-target='#createModal' style={{borderRadius:25, fontSize:'12px', color:'white'}}>ADD ACCOUNT</button>
              </div>
            </div>
            <div className="row">
            <table className="table table-bordered table-hover table-responsive">
            <thead className="thead-light">
              <tr>
                <th scope="col">Manage</th>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Nama Depan</th>
                <th scope="col">Nama Belakang</th>
                <th scope="col">Provinsi</th>
                <th scope="col">Kota</th>
                <th scope="col">Kecamatan</th>
                <th scope="col">Alamat</th>
                <th scope="col">No. Telefon</th>
                <th scope="col">Gambar</th>
                <th scope="col">Status</th> 
                <th scope="col">Tanggal Ditambahkan</th>
                <th scope="col">Tanggal Diedit</th>
              </tr>
            </thead>
            <tbody>
              {listAccount}
            </tbody>
          </table>
          </div>
          </div>
          <Add/>
          <Edit account={this.state.selectAccountEdit}
          />
          <Delete account={this.state.selectAccountDelete}/>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      accounts: state.account.accounts
    }
  }
export default withRouter(connect(mapStateToProps)(Account));