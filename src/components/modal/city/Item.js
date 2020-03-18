import React, {Fragment} from 'react'
import '../../../controllers/css/city.css'
const Item = ({ city }) => {
    return(
        <Fragment>
            <tr>
    <td class='manage'>
        <button type="button" class="btn btn-sm btn-outline-success" data-toggle='modal' data-target='#deleteModal' style={{borderRadius:25, fontSize:'12px', color:'white'}} data-dismiss='modal'>Delete</button>
        <button type="button" class="btn btn-sm btn-success" data-toggle='modal' data-target='#editModal' style={{borderRadius:25, fontSize:'12px', color:'white'}}>Edit</button>
    </td>
    <td class='item'>{city.id}</td>
    <td class='item'>{city.name_city}</td>
    </tr>
        </Fragment>
    )
}
export default Item