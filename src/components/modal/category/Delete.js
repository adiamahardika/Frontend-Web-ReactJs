import React, { Component } from 'react';
import {connect} from 'react-redux'
import { deleteCategory} from '../../../redux/actions/category'
import '../../../controllers/css/product.css'
import {withRouter} from 'react-router-dom'

class Delete extends Component {
    constructor (props) {
        super(props)
        this.state={
            category:[]
        }
    }
    deleteCategory = async (event) => {
        event.preventDefault();
        await this.props.dispatch(deleteCategory(this.props.category.id));
        this.props.history.push('/category')
    }
    render(){
        return(
            <div>
                {this.props.category?
                <div class="modal" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">DELETE CATEGORY</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <p>Anda yakin akan menghapus category ini ?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-md btn-success" style={{borderRadius:25}} data-dismiss="modal">CANCEL</button>
                        <button type="button" class="btn btn-md btn-outline-success" style={{borderRadius:25}} onClick={this.deleteCategory} data-dismiss="modal">DELETE</button>
                    </div>
                    </div>
                </div>
            </div>
            :
            <p></p>
                }
            </div>
        )
    }
}
export default withRouter(connect()(Delete))