import axios from 'axios';
require('dotenv').config()

export const createProvince = (data) => {
    // const authorization = localStorage.getItem('token');
    // const userId = localStorage.getItem("user-id");
    return {
        type: "CREATE_PROVINCE",
        payload: axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL}province`,
            data: data,
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}

export const readProvince = () => {
    // const authorization = localStorage.getItem('token');
    // const userId = localStorage.getItem("user-id");
    return {
        type: "READ_PROVINCE",
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}province`,
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}

export const updateProvince = (provinceId, data) => {
    // const authorization = localStorage.getItem('token');
    // const userId = localStorage.getItem("user-id");
    return {
        type: 'UPDATE_PROVINCE',
        payload: axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_URL}province/${provinceId}`,
            data: data,
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}

export const deleteProvince = (provinceId) => {
    // const authorization = localStorage.getItem('token');
    // const userId = localStorage.getItem("user-id");
    return {
        type: 'DELETE_PROVINCE',
        payload: axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_URL}province/${provinceId}`,
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}

export const searchCategory = (data) => {
    // const authorization = localStorage.getItem('token');
    // const userId = localStorage.getItem("user-id");
    return {
        type: 'SEARCH_CATEGORY',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}category/${data}`,
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}