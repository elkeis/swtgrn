import { $Tags, $TagsActionTypes, UPDATE_SELECTION, SET_FETCH_TAGS, SET_TAGS, } from "./types";
import { $CommonActionTypes, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../types";

const initialState: $Tags = {
    all: [],
    selected: [],
    isFetching: false,
    errors: [],
}

export function tagsReducer(
    state = initialState,
    action: $TagsActionTypes | $CommonActionTypes
): $Tags {
    switch(action.type) {
        case UPDATE_SELECTION:
            return {
                ...state,
                selected: [...action.value]
            }
        case SET_FETCH_TAGS:
            return {
                ...state,
                isFetching: action.value
            }
        case SET_TAGS:
            return {
                ...state,
                all: action.value
            }
        default: return state;
    }
}
