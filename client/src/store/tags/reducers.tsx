import { $Tags, $TagsActionTypes, UPDATE_SELECTION, } from "./types";
import { $CommonActionTypes, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../types";
import {
    tags
} from '../../data'

const initialState: $Tags = {
    all: tags,
    // all: [
    //     {
    //         name: 'apple',
    //         id: 0,
    //     },
    //     {
    //         name: 'orange',
    //         id: 1,
    //     },
    //     {
    //         name: 'banena',
    //         id: 2,
    //     },
    //     {
    //         name: 'lime',
    //         id: 3,
    //     },
    //     {
    //         name: 'apple1',
    //         id: 4,
    //     },
    //     {
    //         name: 'orange1',
    //         id: 5,
    //     },
    //     {
    //         name: 'banena1',
    //         id: 6,
    //     },
    //     {
    //         name: 'lime1',
    //         id: 7,
    //     },
    // ],

    selected: [
    ],
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
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                errors: [...state.errors, FETCH_DATA_FAILURE]
            }
        case FETCH_DATA_SUCCESS:
            const tags = action.value.get('tags');
            return {
                ...state,
                isFetching: false,
                all: [...tags],
                selected: []
            }
        default: return state;
    }
}
