const intialState = {
    history: []
}

const history = (state = intialState, action) => {
    switch (action.type) {
        case 'READ_PURCHASE_PENDING':
            return {
                ...state
            }
        case 'READ_PURCHASE_REJECT':
            return {
                ...state
            }
        case 'READ_PURCHASE_FULFILLED':
            return {
                ...state,
                history: action.payload.data.result
            }
        default:
            return state;
    }
}
export default history