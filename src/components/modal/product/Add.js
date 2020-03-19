import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createProduct } from '../../../redux/actions/product'
import { readCategory } from '../../../redux/actions/category'
import '../../../controllers/css/product.css'
import {withRouter} from 'react-router-dom'
class Add extends Component {
    state = {
        name_product: "",
        image:"",
        cardDesc:"",
        shortDesc:"",
        longDesc:"",
        ingredients:"",
        quantity:"",
        price:"",
        id_category:"",
        id_product_group:"",
    }
    onChangeValue = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
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
    createProduct = async (event) => {
        event.preventDefault();
        let data = new FormData();
        data.append("name_product", this.state.name_product);
        data.append("image", this.state.image);
        data.append("cardDesc", this.state.cardDesc);
        data.append("shortDesc", this.state.shortDesc);
        data.append("longDesc", this.state.longDesc);
        data.append("ingredients", this.state.ingredients);
        data.append("quantity", this.state.quantity);
        data.append("price", this.state.price)
        data.append("id_category", this.state.id_category);
        data.append("id_product_group", this.state.id_product_group);

        await this.props.dispatch(createProduct(data));
        this.props.history.push('/product');
    }
    componentDidMount () {
      this.props.dispatch(readCategory())
    }

    render(){
      const {categorys} = this.props
        return(
            <div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="createModalLabel" aria-hidden="true" >
            <div class="modal-dialog" role="document" >
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ADD PRODUCT</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class='modal-body' align='left'>
                      <form class="needs-validation" novalidate>
                        <div class='form-group'>
                          <div>
                          <label for='validationCustom01' class='col-form-label'>Nama Product: </label>
                          <input name='name_product' type='text' class='form-control'
                          id="validationCustom01" onChange={this.onChangeValue} placeholder='Insert Name Product...' required/>
                          <div class="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div>
                          <label class='col-form-label'> Image: </label>
                          <input type='file' name='image' class='form-control' onChange={this.onChangeImage} required/>
                        </div>
                        <div>
                          <label htmlFor='productId' class='col-form-label'>Card Description: </label>
                          <input name='cardDesc' type='text' class='form-control' onChange={this.onChangeValue} placeholder='Insert Card Description...' required/>
                        </div>
                        <div>
                          <label htmlFor='productId' class='col-form-label'>Short Description: </label>
                          <input name='shortDesc' type='text' class='form-control' onChange={this.onChangeValue} placeholder='Insert Short Description...' required/>
                        </div>
                        <div>
                          <label htmlFor='productId' class='col-form-label'>Long Description: </label>
                          <input name='longDesc' type='text' class='form-control' onChange={this.onChangeValue} placeholder='Insert Long Description...' required/>
                        </div>
                        <div>
                          <label htmlFor='productId' class='col-form-label'>Ingredients: </label>
                          <input name='ingredients' type='text' class='form-control' onChange={this.onChangeValue} placeholder='Insert Ingredients Description...' required/>
                        </div>
                        <div>
                          <label htmlFor='productId' class='col-form-label'>Quantity: </label>
                          <input name='quantity' type='number' class='form-control' onChange={this.onChangeValue} placeholder='Insert Product Quantity...'required />
                        </div>
                        <div>
                          <label htmlFor='productId' class='col-form-label'>Price: </label>
                          <input name='price' type='number' class='form-control' onChange={this.onChangeValue} placeholder='Insert Product Price...' required/>
                        </div>
                        <div>
                          <label htmlFor='productId' class='col-form-label'>Category: </label>
                          <select class="custom-select" name='id_category' onChange={this.onChangeValue} required>
                          <option selected disabled>Choose...</option>
                          {categorys.map((category,index) => 
                            <option key={index} value={category.id}>{category.name_category}</option>
                            )}
                        </select>
                        </div>
                        <div>
                          <label htmlFor='productId' class='col-form-label'>Group: </label>
                          <select class="custom-select" name='id_product_group' onChange={this.onChangeValue} required>
                          <option selected disabled>Choose...</option>
                          <option value='1'>Import</option>
                          <option value='2'>Lokal</option>
                        </select>
                        </div>
                        </div>
                      </form>
                    </div>
                <div class="modal-footer">
                <button style={{borderRadius:25}} type="button" class="btn btn-md btn-outline-success" data-dismiss="modal">CANCEL</button>
                <button onClick={this.createProduct} style={{borderRadius:25}} type="submit" class="btn" class="btn btn-md btn-success" data-dismiss="modal">ADD</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    categorys: state.category.categorys
  }
}
export default withRouter(connect(mapStateToProps)(Add))