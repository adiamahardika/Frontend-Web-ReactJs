import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createAccount} from '../../../redux/actions/account'
import {readProvince} from '../../../redux/actions/province'
import {readCity} from '../../../redux/actions/city'
import {readSubCity} from '../../../redux/actions/subCity'
import '../../../controllers/css/account.css'
import {withRouter} from 'react-router-dom'
import province from '../../../redux/reducers/province'

class Add extends Component {
    state = {
        email:"",
        first_name:"",
        last_name:"",
        password:"",
        id_province:"",
        id_city:"",
        id_sub_city:"",
        address:"",
        no_telephone:"",
        image:"",
        role:""
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
    createAccount = async (event) => {
        event.preventDefault();
        let data = new FormData();
        data.append("email", this.state.email)
        data.append("first_name", this.state.first_name)
        data.append("last_name", this.state.last_name)
        data.append("password", this.state.password)
        data.append("id_province", this.state.id_province)
        data.append("id_city", this.state.id_city)
        data.append("id_sub_city", this.state.id_sub_city)
        data.append("address", this.state.address)
        data.append("no_telephone", this.state.no_telephone)
        data.append("image", this.state.image)
        data.append("role", this.state.role)

        await this.props.dispatch(createAccount(data));
        this.props.history.push('/account');
    }
    componentDidMount () {
      this.props.dispatch(readProvince())
      this.props.dispatch(readCity())
      this.props.dispatch(readSubCity())
    }
    render(){
      const {provinces, cities, subCities} = this.props
        return(
            <div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="createModalLabel" aria-hidden="true" >
            <div class="modal-dialog" role="document" >
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ADD ACCOUNT</h5>
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
                          id="validationCustom01" onChange={this.onChangeValue} placeholder='ex: youremail@mail.com' required/>
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Nama Depan: </label>
                          <input name='first_name' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} placeholder='ex: David' required/>
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Nama Belakang: </label>
                          <input name='last_name' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} placeholder='ex: Sopono' required/>
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Password: </label>
                          <input name='password' type='password' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} required/>
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Provinsi: </label>
                          <select class="custom-select" name='id_province' onChange={this.onChangeValue} required>
                          <option selected disabled>Choose...</option>
                          {provinces.map((province,index) => 
                            <option key={index} value={province.id}>{province.name_province}</option>
                            )}
                        </select>
                          {/* <input name='id_province' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} required/> */}
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Kota: </label>
                          <select class="custom-select" name='id_city' onChange={this.onChangeValue} required>
                          <option selected disabled>Choose...</option>
                          {cities.map((city,index) => 
                            <option key={index} value={city.id}>{city.name_city}</option>
                            )}
                        </select>
                          {/* <input name='id_city' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} required/> */}
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Kecamatan: </label>
                          <select class="custom-select" name='id_sub_city' onChange={this.onChangeValue} required>
                          <option selected disabled>Choose...</option>
                          {subCities.map((subCity,index) => 
                            <option key={index} value={subCity.id}>{subCity.name_sub_city}</option>
                            )}
                        </select>
                          {/* <input name='id_sub_city' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} required/> */}
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Alamat: </label>
                          <input name='address' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} placeholder='ex: Jl. Nya Sama Aku Jadian Sama Dia' required/>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>No. Telefon: </label>
                          <input name='no_telephone' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} placeholder='ex: 08123123123' required/>
                        </div>
                        </div>
                        <div>
                          <label class='col-form-label'> Image: </label>
                          <input type='file' name='image' class='form-control' onChange={this.onChangeImage} required/>
                        </div>
                        <div>
                          <label for='validationCustom01' class='col-form-label'>Status: </label>
                          <select class="custom-select" name='role' onChange={this.onChangeValue} required>
                          <option selected disabled>Choose...</option>
                          <option value={'admin'}>Admin</option>
                          <option value={'member'}>Member</option>
                        </select>
                          {/* <input name='role' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} required/> */}
                        </div>
                        </div>
                      </form>
                    </div>
                <div class="modal-footer">
                <button style={{borderRadius:25}} type="button" class="btn btn-md btn-outline-success" data-dismiss="modal">CANCEL</button>
                <button onClick={this.createAccount} style={{borderRadius:25}} type="submit" class="btn" class="btn btn-md btn-success" data-dismiss="modal">ADD</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    provinces: state.province.provinces,
    cities: state.city.cities,
    subCities: state.subCity.subCities
  }
}
export default withRouter(connect(mapStateToProps)(Add))