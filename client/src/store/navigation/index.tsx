import { combineReducers } from 'redux';
import { headerReducer, catalogReducer, pageReducer } from './reducers';

export * from './actions';
export * from './types';

export const navigationReducer = combineReducers({
    header: headerReducer,
    catalog: catalogReducer,
    page: pageReducer
});
