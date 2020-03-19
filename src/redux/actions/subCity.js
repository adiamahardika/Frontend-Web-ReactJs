import axios from 'axios';
require('dotenv').config()

export const createSubCity = (data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    const role = localStorage.getItem("role");
    return {
        type: "CREATE_SUB_CITY",
        payload: axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL}subCity`,
            data: data,
            headers: {
                "authorization": authorization,
                "user-id": userId,
                "role": role
            }
        })
    }
}

export const readSubCity = () => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    const role = localStorage.getItem("role");
    return {
        type: "READ_SUB_CITY",
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}subCity`,
            headers: {
                "authorization": authorization,
                "user-id": userId,
                "role": role
            }
        })
    }
}

export const updateSubCity = (subCityId, data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    const role = localStorage.getItem("role");
    return {
        type: 'UPDATE_SUB_CITY',
        payload: axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_URL}subCity/${subCityId}`,
            data: data,
            headers: {
                "authorization": authorization,
                "user-id": userId,
                "role": role
            }
        })
    }
}

export const deleteSubCity = (subCityId) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    const role = localStorage.getItem("role");
    return {
        type: 'DELETE_SUB_CITY',
        payload: axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_URL}subCity/${subCityId}`,
            headers: {
                "authorization": authorization,
                "user-id": userId,
                "role": role
            }
        })
    }
}

export const searchSubCity = (data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    const role = localStorage.getItem("role");
    return {
        type: 'SEARCH_SUB_CITY',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}subCity/${data}`,
            headers: {
                "authorization": authorization,
                "user-id": userId,
                "role": role
            }
        })
    }
}