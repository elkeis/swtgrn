import {
    $UrlState,
    UrlActions,
    SET_URL
} from './types';

const initialState: $UrlState = {
    path: '/'
}

export function tagsReducer(
    state = initialState,
    action: UrlActions
): $UrlState {
    switch(action.type) {
        case SET_URL:
            return {
                ...state,
                path: action.value
            }
        default: return state;
    }
}
