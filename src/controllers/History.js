import React, { Component, Fragment} from 'react'
import "./css/history.css"
import {connect} from 'react-redux';
import { readPurchase } from '../redux/actions/history' 
import Navbar from '../components/Navbar'
import Item from '../components/modal/history/Item'
import { withRouter } from 'react-router-dom'
class History extends Component {
    componentDidMount(){
    if(!localStorage.getItem('token'))
        this.props.history.push('/login')
    this.props.dispatch(readPurchase())
    }
    render(){
        const {history} = this.props
        console.log(this.props)
        const historyOrder = history.map((history)=> <Item history={history}/>) 
        return(
            <Fragment>
                <Navbar/>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-8" style={{fontSize:'32px', marginTop:'auto', fontFamily: 'Archivo Black,sans-serif', color:'#6c757d'}}><h2>
                        HISTORY ORDER
                        </h2>
                        </div>
                    </div>
                    <div className='row'>
                    <table className="table table-bordered table-hover table-responsive">
                        <thead className="thead-light">
                        <tr>
                            <th scope="col"> ID </th>
                            <th scope="col">Nama</th>
                            <th scope="col">Product</th>
                            <th scope="col">Receiver</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefon</th>
                            <th scope="col">Provinsi</th>
                            <th scope="col">Kota</th>
                            <th scope="col">Kecamatan</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Fax</th>
                            <th scope="col">Tax</th>
                            <th scope="col">Pengiriman</th>
                            <th scope="col">Terkirim</th>
                            <th scope="col">Total</th>
                            <th scope="col">ID Pemesanan</th>
                            <th scope="col">Tanggal Pemesanan</th>
                        </tr>
                        </thead>
                        <tbody>
                        {historyOrder}
                        </tbody>
                    </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        history: state.history.history
    }
}
export default withRouter(connect(mapStateToProps)(History))