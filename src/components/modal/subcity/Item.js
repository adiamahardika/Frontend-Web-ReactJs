import React ,{Fragment} from 'react'
import '../../../controllers/css/subcity.css'
const Item = ({subCity}) => {
    return(
        <Fragment>
            <tr>
    <td class='manage'>
        <button type="button" class="btn btn-sm btn-outline-success" data-toggle='modal' data-target='#deleteModal' style={{borderRadius:25, fontSize:'12px', color:'white'}} data-dismiss='modal'>Delete</button>
        <button type="button" class="btn btn-sm btn-success" data-toggle='modal' data-target='#editModal' style={{borderRadius:25, fontSize:'12px', color:'white'}}>Edit</button>
    </td>
    <td class='item'>{subCity.id}</td>
    <td class='item'>{subCity.name_sub_city}</td>
    <td class='item'>{subCity.name_city}</td>
    </tr>
        </Fragment>
    )
}
export default Item