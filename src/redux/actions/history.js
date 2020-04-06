import axios from 'axios'
require ('dotenv').config()

export const readPurchase = () => {
    return {
        type: 'READ_PURCHASE',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}purchase`
        })
    }
}