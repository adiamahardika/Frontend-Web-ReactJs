import axios from 'axios'
require ('dotenv').config()

export const createProduct = (data) => {
    // const token = localStorage.getItem('token');
    // const id = localStorage.getItem("id");
    return {
        type: 'CREATE_PRODUCT',
        payload: axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL}product`,
            data: data,
            // headers: {
            //     "token": token,
            //     "id": id
            // }
        })
    }
}

export const readProduct = (category, product, by, paginateId) => {
    // const token = localStorage.getItem('token');
    // const id = localStorage.getItem("id");
    if (category !== undefined || product !== undefined || by !== undefined) {
        return {
            type: 'READ_PRODUCT',
            payload: axios({
                method: "GET",
                url: `${process.env.REACT_APP_URL}product/?category=${category}&product=${product}&sortBy=${by}`,
                // headers: {
                //     "token": token,
                //     "id": id
                // }
            })
        }
    } else if (paginateId !== undefined) {
        return {
            type: 'READ_PRODUCT',
            payload: axios({
                method: "GET",
                url: `${process.env.REACT_APP_URL}product/?&paginateId=${paginateId}`,
                // headers: {
                //     "token": token,
                //     "id": id
                // }
            })
        }
    } else {
        return {
            type: 'READ_PRODUCT',
            payload: axios({
                method: "GET",
                url: `${process.env.REACT_APP_URL}product`,
                // headers: {
                //     "token": token,
                //     "id": id
                // }
            })
        }
    }
}

export const updateProduct = (productId, data) => {
    // const token = localStorage.getItem('token');
    // const id = localStorage.getItem("id");
    return {
        type: 'UPDATE_PRODUCT',
        payload: axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_URL}product/${productId}`,
            data: data,
            // headers: {
            //     "token": token,
            //     "id": id
            // }
        })
    }
}

export const deleteProduct = (productId) => {
    // const token = localStorage.getItem('token');
    // const id = localStorage.getItem("id");
    return {
        type: 'DELETE_PRODUCT',
        payload: axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_URL}product/${productId}`,
            // headers: {
            //     "token": token,
            //     "id": id
            // }
        })
    }
}

export const detailProduct = (productId) => {
    // const token = localStorage.getItem('token');
    // const id = localStorage.getItem("id");
    return {
        type: 'DETAIL_PRODUCT',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}product${productId}`,
            // headers: {
            //     "token": token,
            //     "id": id
            // }
        })
    }
}