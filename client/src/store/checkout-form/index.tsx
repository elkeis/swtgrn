import { combineReducers } from 'redux';
import { checkoutBlockReducer, firstBlockReducer, checkoutFormAddressBlockReducer, checkoutFormFinalBlockReducer } from './reducers';
import { $CheckoutForm } from './types';

export * from './reducers';
export * from './actions';
export * from './types';


export const checkoutFormReducer = combineReducers<$CheckoutForm>({
    checkoutBlock: checkoutBlockReducer,
    firstBlock: firstBlockReducer,
    addressBlock: checkoutFormAddressBlockReducer,
    finalBlock: checkoutFormFinalBlockReducer
});
