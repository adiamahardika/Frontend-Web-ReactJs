const initialState = {
    provinces: []
}

const province = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROVINCE_PENDING':
            return {
                ...state
            }
        case 'CREATE_PROVINCE_REJECTED':
            return {
                ...state
            }
        case 'CREATE_PROVINCE_FULFILLED':
            return {
                ...state,
                provinces: action.payload.data.result
            }

        case 'READ_PROVINCE_PENDING':
            return {
                ...state
            }
        case 'READ_PROVINCE_REJECTED':
            return {
                ...state
            }
        case 'READ_PROVINCE_FULFILLED':
            return {
                ...state,
                provinces: action.payload.data.result
            }

        case 'UPDATE_PROVINCE_PENDING':
            return {
                ...state,
            }

        case 'UPDATE_PROVINCE_REJECTED':
            return {
                ...state,
            }

        case 'UPDATE_PROVINCE_FULFILLED':
            return {
                ...state,
                provinces: action.payload.data.result
            }

        case 'DELETE_PROVINCE_PENDING':
            return {
                ...state
            }
        case 'DELETE_PROVINCE_REJECTED':
            return {
                ...state
            }
        case 'DELETE_PROVINCE_FULFILLED':
            return {
                ...state,
                provinces: action.payload.data.result
            }

        case 'SEARCH_PROVINCE_PENDING':
            return {
                ...state
            }
        case 'SEARCH_PROVINCE_REJECTED':
            return {
                ...state
            }
        case 'SEARCH_PROVINCE_FULFILLED':
            return {
                ...state,
                provinces: action.payload.data.result
            }
        default:
            return state;
    }
}

export default province