import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from './products';

const appReducer = combineReducers({
    products,
    router: routerReducer
});

export default appReducer;
