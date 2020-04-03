const initialState = {
    subCities: []
}

const subCity = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_SUB_CITY_PENDING':
            return {
                ...state
            }
        case 'CREATE_SUB_CITY_REJECTED':
            return {
                ...state
            }
        case 'CREATE_SUB_CITY_FULFILLED':
            return {
                ...state,
                subCities: action.payload.data.result
            }

        case 'READ_SUB_CITY_PENDING':
            return {
                ...state
            }
        case 'READ_SUB_CITY_REJECTED':
            return {
                ...state
            }
        case 'READ_SUB_CITY_FULFILLED':
            return {
                ...state,
                subCities: action.payload.data.result
            }

        case 'UPDATE_SUB_CITY_PENDING':
            return {
                ...state,
            }

        case 'UPDATE_SUB_CITY_REJECTED':
            return {
                ...state,
            }

        case 'UPDATE_SUB_CITY_FULFILLED':
            return {
                ...state,
                subCities: action.payload.data.result
            }

        case 'DELETE_SUB_CITY_PENDING':
            return {
                ...state
            }
        case 'DELETE_SUB_CITY_REJECTED':
            return {
                ...state
            }
        case 'DELETE_SUB_CITY_FULFILLED':
            return {
                ...state,
                subCities: action.payload.data.result
            }

        case 'SEARCH_SUB_CITY_PENDING':
            return {
                ...state
            }
        case 'SEARCH_SUB_CITY_REJECTED':
            return {
                ...state
            }
        case 'SEARCH_SUB_CITY_FULFILLED':
            return {
                ...state,
                subCities: action.payload.data.result
            }
        default:
            return state;
    }
}

export default subCity