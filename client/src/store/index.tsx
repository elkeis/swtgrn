import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

import { navigationReducer, $Navigation } from './navigation';
import { productCardsReducer, $ProductCards } from './product-cards';
import { checkoutFormReducer, $CheckoutForm } from './checkout-form';
import { tagsReducer, $Tags } from './tags';
import { $Contacts, contactsReducer } from './contacts';
import { $Events, eventsReducer } from './events';

export * from './product-cards';
export * from './navigation';
export * from './checkout-form';
export * from './tags';
export * from './contacts';
export * from './events';

export * from './types';
export * from './actions';


export interface $App {
    navigation: $Navigation,
    productCards: $ProductCards,
    checkoutForm: $CheckoutForm,
    tags: $Tags,
    contacts: $Contacts,
    events: $Events,
}

const rootReducer = combineReducers<$App>({
    navigation: navigationReducer,
    productCards: productCardsReducer,
    checkoutForm: checkoutFormReducer,
    tags: tagsReducer,
    contacts: contactsReducer,
    events: eventsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
