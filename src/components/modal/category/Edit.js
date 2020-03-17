import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateCategory} from '../../../redux/actions/category'
import '../../../controllers/css/category.css'
import {withRouter} from 'react-router-dom'
class Edit extends Component{
    state={
        name_category:"",
    }

    componentWillReceiveProps({ category }) {
        this.onSetValue(category);
    }

    onSetValue = (category) => {
        this.setState({
            name_category: category.name_category
        })
    }
    onChangeValue = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    updateCategory = async (event) => {
        event.preventDefault();
        const categoryId = this.props.category.id
        await this.props.dispatch(updateCategory(categoryId, this.state));
        this.props.history.push('/category')
    }

    render(){
        return(
            <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true" >
            <div class="modal-dialog" role="document" >
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">EDIT CATEGORY</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class='modal-body' align='left'>
                      <form >
                        <div class='form-group'>
                          <label htmlFor='categoryId' class='col-form-label'>Nama Category: </label>
                          <input name='name_category' type='text' class='form-control' onChange={this.onChangeValue} value={this.state.name_category} placeholder='Insert Name Category...' required/>
                        </div>
                      </form>
                    </div>
                <div class="modal-footer">
                <button style={{borderRadius:25}} type="button" class="btn btn-md btn-outline-success" data-dismiss="modal">CANCEL</button>
                <button onClick={this.updateCategory} style={{borderRadius:25}} type="submit" class="btn" class="btn btn-md btn-success" data-dismiss='modal' >ADD</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default withRouter(connect()(Edit))