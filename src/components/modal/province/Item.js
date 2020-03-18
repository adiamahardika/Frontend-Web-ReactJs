import React, {Fragment} from 'react'
import '../../../controllers/css/province.css'
const Item = ({ province }) => {
    return(
        <Fragment>
            <tr>
    <td class='manage'>
        <button type="button" class="btn btn-sm btn-outline-success" data-toggle='modal' data-target='#deleteModal' style={{borderRadius:25, fontSize:'12px', color:'white'}} data-dismiss='modal'>Delete</button>
        <button type="button" class="btn btn-sm btn-success" data-toggle='modal' data-target='#editModal' style={{borderRadius:25, fontSize:'12px', color:'white'}}>Edit</button>
    </td>
    <td class='item'>{province.id}</td>
    <td class='item'>{province.name_province}</td>
    </tr>
        </Fragment>
    )
}
export default Item