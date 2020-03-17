import React, {Component} from 'react'
import {connect} from 'react-redux'

import {updateProduct} from '../../../redux/actions/product'
import {withRouter} from 'react-router-dom' 
class Edit extends Component {
    state = {
        productId:"",
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
    componentWillReceiveProps = ({ product }) => {
        this.setState({
            productId: product.id,
            name_product: product.name_product,
            cardDesc: product.cardDesc,
            shortDesc: product.shortDesc,
            longDesc: product.longDesc,
            ingredients: product.ingredients,
            quantity: product.quantity,
            price: product.price,
            id_category: product.id_category,
            id_product_group: product.id_product_group
        })
    }
    onChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onChangeImage = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    }
    updateProduct = async (event) => {
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

        if (this.state.image === "") {
            data.delete("image")
            const productId = this.state.productId
            await this.props.dispatch(updateProduct(productId, data))
            this.props.history.push('/product')
        } else {
            const productId = this.state.productId
            await this.props.dispatch(updateProduct(productId, data))
            this.props.history.push('/product')
        }
    }
    render(){
        return(
            <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true" >
            <div class="modal-dialog" role="document" >
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">EDIT PRODUCT</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class='modal-body' align='left'>
                      <form >
                        <div class='form-group'>
                          <label htmlFor='productId' class='col-form-label'>Nama Product: </label>
                          <input name='name_product' type='text' class='form-control' value={this.state.name_product} onChange={this.onChangeValue} placeholder='Insert Name Product...' required/>
                        </div>
                        <div class='form-group'>
                          <label class='col-form-label'> Image: </label>
                          <input type='file' name='image' class='form-control' onChange={this.onChangeImage} required/>
                        </div>
                        <div class='form-group'>
                          <label htmlFor='productId' class='col-form-label'>Card Description: </label>
                          <input name='cardDesc' type='text' class='form-control' value={this.state.cardDesc} onChange={this.onChangeValue} placeholder='Insert Card Description...' required/>
                        </div>
                        <div class='form-group'>
                          <label htmlFor='productId' class='col-form-label'>Short Description: </label>
                          <input name='shortDesc' type='text' class='form-control' value={this.state.shortDesc} onChange={this.onChangeValue} placeholder='Insert Short Description...' required/>
                        </div>
                        <div class='form-group'>
                          <label htmlFor='productId' class='col-form-label'>Long Description: </label>
                          <input name='longDesc' type='text' class='form-control' value={this.state.longDesc} onChange={this.onChangeValue} placeholder='Insert Long Description...' required/>
                        </div>
                        <div class='form-group'>
                          <label htmlFor='productId' class='col-form-label'>Ingredients: </label>
                          <input name='ingredients' type='text' class='form-control' value={this.state.ingredients} onChange={this.onChangeValue} placeholder='Insert Ingredients Description...' required/>
                        </div>
                        <div class='form-group'>
                          <label htmlFor='productId' class='col-form-label'>Quantity: </label>
                          <input name='quantity' type='number' class='form-control' value={this.state.quantity} onChange={this.onChangeValue} placeholder='Insert Product Quantity...'required />
                        </div>
                        <div class='form-group'>
                          <label htmlFor='productId' class='col-form-label'>Price: </label>
                          <input name='price' type='number' class='form-control' value={this.state.price} onChange={this.onChangeValue} placeholder='Insert Product Price...' required/>
                        </div>
                        <div class='form-group'>
                          <label htmlFor='productId' class='col-form-label'>Category: </label>
                          <input name='id_category' type='number' class='form-control' value={this.state.id_category} onChange={this.onChangeValue} placeholder='Insert Product Category...' required/>
                        </div>
                        <div class='form-group'>
                          <label htmlFor='productId' class='col-form-label'>Group: </label>
                          <input name='id_product_group' type='number' class='form-control' value={this.state.id_product_group} onChange={this.onChangeValue} placeholder='Insert Product Group...' required/>
                        </div>
                      </form>
                    </div>
                <div class="modal-footer">
                <button style={{borderRadius:25}} type="button" class="btn btn-md btn-outline-success" data-dismiss="modal">CANCEL</button>
                <button onClick={this.updateProduct} style={{borderRadius:25}} type="submit" class="btn" class="btn btn-md btn-success" data-dismiss='modal' >EDIT</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default withRouter(connect()(Edit))