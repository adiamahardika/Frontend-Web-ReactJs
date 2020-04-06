import axios from 'axios';
require('dotenv').config()

export const createCity = (data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: "CREATE_CITY",
        payload: axios({
            method: "POST",
            url: `${process.env.REACT_APP_URL}city`,
            data: data,
            headers: {
                "authorization": authorization,
                "user-id": userId
            }
        })
    }
}

export const readCity = () => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: "READ_CITY",
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}city`,
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}

export const updateCity = (cityId, data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'UPDATE_CITY',
        payload: axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_URL}city/${cityId}`,
            data: data,
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}

export const deleteCity = (cityId) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'DELETE_CITY',
        payload: axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_URL}city/${cityId}`,
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}

export const searchCity = (data) => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return {
        type: 'SEARCH_CATEGORY',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_URL}city/${data}`,
            // headers: {
            //     "authorization": authorization,
            //     "user-id": userId
            // }
        })
    }
}