import {
    $UrlState,
    UrlActions,
    SET_URL
} from './types';

import page from 'page';

const initialState: $UrlState = {
    path: '/'
}

export function urlReducer(
    state = initialState,
    action: UrlActions
): $UrlState {
    switch(action.type) {
        case SET_URL:
            console.log(JSON.stringify(action));
            return {
                ...state,
                path: action.value
            }
        default: return state;
    }
}
