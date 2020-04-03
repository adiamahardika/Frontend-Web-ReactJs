import React, {Component} from 'react'
import {connect} from 'react-redux'

import {updateAccount} from '../../../redux/actions/account'
import {withRouter} from 'react-router-dom'
class Edit extends Component {
    state = {
        accountId:"",
        email:"",
        first_name:"",
        last_name:"",
        id_province:"",
        id_city:"",
        id_sub_city:"",
        address:"",
        no_telephone:"",
        image:"",
        role:""
    }
    componentWillReceiveProps = ({ account }) => {
        this.setState({
            accountId: account.id,
            email: account.email,
            first_name: account.first_name,
            last_name: account.last_name,
            id_province: account.id_province,
            id_city: account.id_city,
            id_sub_city: account.id_sub_city,
            address: account.address,
            no_telephone: account.no_telephone,
            role: account.role
        })
    }
    onChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }
    onChangeImage = event => {
        const image = event.target.files[0]
        if (image.size > 1024 * 1024 * 3)
        return alert('Cannot upload image with size more than 3MB')
        const imageArray = image.name.split(".");
        const imageExtension = imageArray[imageArray.length - 1].toLowerCase();
        if (
        imageExtension !== "png" &&
        imageExtension !== "jpg" &&
        imageExtension !== "jpeg" &&
        imageExtension !== "gif"
        )
        return alert("Cannot upload file except image!")
        this.setState({
            image:image
        })
    }
    updateAccount = async (event) => {
        event.preventDefault();
        let data = new FormData();
        data.append("email", this.state.email)
        data.append("first_name", this.state.first_name)
        data.append("last_name", this.state.last_name)
        data.append("id_province", this.state.id_province)
        data.append("id_city", this.state.id_city)
        data.append("id_sub_city", this.state.id_sub_city)
        data.append("address", this.state.address)
        data.append("no_telephone", this.state.no_telephone)
        data.append("image", this.state.image)
        data.append("role", this.state.role)

        if(this.state.image === "") {
            data.delete("image")
            const accountId = this.state.accountId
            await this.props.dispatch(updateAccount(accountId, data))
            this.props.history.push('/account')
        } else {
            const accountId = this.state.accountId
            await this.props.dispatch(updateAccount(accountId, data))
            this.props.history.push('/account')
        }
    }
    render(){
        return(
            <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true" >
            <div class="modal-dialog" role="document" >
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">EDIT ACCOUNT</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class='modal-body' align='left'>
                      <form class="needs-validation" novalidate>
                        <div class='form-group'>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Email: </label>
                          <input name='email' type='email' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} value={this.state.email} required/>
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Nama Depan: </label>
                          <input name='first_name' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} value={this.state.first_name} required/>
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Nama Belakang: </label>
                          <input name='last_name' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} value={this.state.last_name} required/>
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Provinsi: </label>
                          <input name='id_province' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} value={this.state.id_province} required/>
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Kota: </label>
                          <input name='id_city' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} value={this.state.id_city} required/>
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Kecamatan: </label>
                          <input name='id_sub_city' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} value={this.state.id_sub_city} required/>
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Alamat: </label>
                          <input name='address' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} value={this.state.address} required/>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>No. Telefon: </label>
                          <input name='no_telephone' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} value={this.state.no_telephone} required/>
                        </div>
                        </div>
                        <div>
                          <label class='col-form-label'> Image: </label>
                          <input type='file' name='image' class='form-control' onChange={this.onChangeImage} required/>
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Status: </label>
                          <input name='role' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} value={this.state.role} required/>
                        </div>
                        </div>
                      </form>
                    </div>
                <div class="modal-footer">
                <button style={{borderRadius:25}} type="button" class="btn btn-md btn-outline-success" data-dismiss="modal">CANCEL</button>
                <button onClick={this.updateAccount} style={{borderRadius:25}} type="submit" class="btn" class="btn btn-md btn-success" data-dismiss="modal">ADD</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default withRouter(connect()(Edit))