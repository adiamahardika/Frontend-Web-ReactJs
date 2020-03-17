import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createCategory} from '../../../redux/actions/category'
import '../../../controllers/css/category.css'
import {withRouter} from 'react-router-dom'
class Add extends Component{
    state={
        name_category:"",
    }
    onChangeValue = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    createCategory = async (event) => {
        event.preventDefault();
        await this.props.dispatch(createCategory(this.state));
        this.props.history.push('/category')
    }

    render(){
        return(
            <div class="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="createModalLabel" aria-hidden="true" >
            <div class="modal-dialog" role="document" >
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">ADD CATEGORY</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class='modal-body' align='left'>
                      <form >
                        <div class='form-group'>
                          <label htmlFor='categoryId' class='col-form-label'>Nama Category: </label>
                          <input name='name_category' type='text' class='form-control' onChange={this.onChangeValue} placeholder='Insert Name Category...' required/>
                        </div>
                      </form>
                    </div>
                <div class="modal-footer">
                <button style={{borderRadius:25}} type="button" class="btn btn-md btn-outline-success" data-dismiss="modal">CANCEL</button>
                <button onClick={this.createCategory} style={{borderRadius:25}} type="submit" class="btn" class="btn btn-md btn-success" data-dismiss='modal' >ADD</button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default withRouter(connect()(Add))