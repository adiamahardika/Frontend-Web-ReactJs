import React, {Fragment} from 'react'
import '../../../controllers/css/account.css'
const Item = ({ account, onselectAccountEdit }) => {
    const onClickEdit = (event) => {
        event.preventDefault();
        onselectAccountEdit(account)
    }
    return(
        <Fragment>
            <tr>
    <td class='manage'>
        <button type="button" class="btn btn-sm btn-outline-success" data-toggle='modal' data-target='#deleteModal' style={{borderRadius:25, fontSize:'12px', color:'white'}}  data-dismiss='modal'>Delete</button>
        <button type="button" class="btn btn-sm btn-success" data-toggle='modal' data-target='#editModal' style={{borderRadius:25, fontSize:'12px', color:'white'}} onClick={onClickEdit}>Edit</button>
    </td>
    <td class='item'>{account.id}</td>
    <td class='item'>{account.email}</td>
    <td class='item'>{account.first_name}</td>
    <td class='desc'>{account.last_name}</td>
    <td class='desc'>{account.name_province}</td>
    <td class='item'>{account.name_city}</td>
    <td class='item'>{account.name_sub_city}</td>
    <td class='item'>{account.address}</td>
    <td class='item'>{account.no_telephone}</td>
    <td class='item'><img src={account.image}alt={account.image} style={{ maxHeight: 50 }}/></td>
    <td class='item'>{account.role}</td>
    <td class='item'>{account.date_added}</td>
    <td class='item'>{account.date_updated}</td>
    </tr>
        </Fragment>
    )
}

export default Item