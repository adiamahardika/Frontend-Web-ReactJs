import React, {Fragment} from 'react'
import '../../../controllers/css/history.css'
const Item = ({history}) => {
    return(
        <Fragment>
            <tr>
                <td class='item'>{history.id}</td>
                <td class='item'>{history.first_name}</td>
                <td class='item'>{history.name_product}</td>
                <td class='item'>{history.name_reciver}</td>
                <td class='item'>{history.email}</td>
                <td class='item'>{history.no_telephone}</td>
                <td class='item'>{history.name_province}</td>
                <td class='item'>{history.name_city}</td>
                <td class='item'>{history.name_sub_city}</td>
                <td class='desc'>{history.address}</td>
                <td class='item'>{history.fax}</td>
                <td class='item'>{history.tax}</td>
                <td class='item'>{history.shipping}</td>
                <td class='item'>{history.shipped}</td>
                <td class='item'>{history.total}</td>
                <td class='item'>{history.tracking}</td>
                <td class='item'>{history.date}</td>
            </tr>
        </Fragment>
    )
}
export default Item