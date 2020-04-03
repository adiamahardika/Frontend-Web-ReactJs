import React, {Fragment} from 'react'
import '../../../controllers/css/category.css'
const Item = ({ category, onSelectCategoryEdit, onSelectCategoryDelete }) => {
    const onClickEdit = (event) => {
        event.preventDefault();
        onSelectCategoryEdit(category);
    }
    const onClickDelete = (event) => {
        event.preventDefault();
        onSelectCategoryDelete(category);
    }
    return(
        <Fragment>
            <tr>
    <td class='manage'>
        <button type="button" class="btn btn-sm btn-outline-success" data-toggle='modal' data-target='#deleteModal' style={{borderRadius:25, fontSize:'12px', color:'white'}} onClick={onClickDelete} data-dismiss='modal'>Delete</button>
        <button type="button" class="btn btn-sm btn-success" data-toggle='modal' data-target='#editModal' style={{borderRadius:25, fontSize:'12px', color:'white'}} onClick={onClickEdit}>Edit</button>
    </td>
    <td class='item'>{category.id}</td>
    <td class='item'>{category.name_category}</td>
    </tr>
        </Fragment>
    )
}
export default Item