import { combineReducers } from 'redux';

import products from './products';
import category from './category'
import account from './account'

export default combineReducers({
    products,
    category,
    account,
});