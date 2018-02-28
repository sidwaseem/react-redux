import Immutable from 'immutable';
import { LOAD_PRODUCTS } from '../actions/products';

const initialState = Immutable.fromJS({ data: [] });

/**
 * Reducer to handle the products section of the store
 * @param  {Object} [state=initialState] initialState declaration
 * @param  {Object} action               action type
 * @return {Object}                      dispatching state
 */
const products = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            if (!action.error) {
                return state.set('data', Immutable.fromJS(action.payload));
            }
            return state;
        default:
            return state;
    }
};

export default products;
