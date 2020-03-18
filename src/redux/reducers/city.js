const initialState = {
    cities: []
}

const city = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_CITY_PENDING':
            return {
                ...state
            }
        case 'CREATE_CITY_REJECTED':
            return {
                ...state
            }
        case 'CREATE_CITY_FULFILLED':
            return {
                ...state,
                cities: action.payload.data.result
            }

        case 'READ_CITY_PENDING':
            return {
                ...state
            }
        case 'READ_CITY_REJECTED':
            return {
                ...state
            }
        case 'READ_CITY_FULFILLED':
            return {
                ...state,
                cities: action.payload.data.result
            }

        case 'UPDATE_CITY_PENDING':
            return {
                ...state,
            }

        case 'UPDATE_CITY_REJECTED':
            return {
                ...state,
            }

        case 'UPDATE_CITY_FULFILLED':
            return {
                ...state,
                cities: action.payload.data.result
            }

        case 'DELETE_CITY_PENDING':
            return {
                ...state
            }
        case 'DELETE_CITY_REJECTED':
            return {
                ...state
            }
        case 'DELETE_CITY_FULFILLED':
            return {
                ...state,
                cities: action.payload.data.result
            }

        case 'SEARCH_CITY_PENDING':
            return {
                ...state
            }
        case 'SEARCH_CITY_REJECTED':
            return {
                ...state
            }
        case 'SEARCH_CITY_FULFILLED':
            return {
                ...state,
                cities: action.payload.data.result
            }
        default:
            return state;
    }
}

export default city