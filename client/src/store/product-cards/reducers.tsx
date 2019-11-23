import {
    $ProductCardsActionTypes,
    $ProductCards,
    UPDATE_PRODUCT_CARD,
    SET_PRODUCT_CARDS,
    SET_FETCH_PRODUCT_CARDS,
} from "./types";

import { $CommonActionTypes } from "../types";

const initialState: $ProductCards  = {
    list: [],
    isFetching: false,
    errors: []
}

export function productCardsReducer (
    state = initialState,
    action: $ProductCardsActionTypes | $CommonActionTypes
): $ProductCards {
    switch (action.type) {
        case UPDATE_PRODUCT_CARD:
            return {
                ...state,
                list: state.list.map(card => ({
                    ...card,
                    addedCount: card.id === action.id ? action.addedCount : card.addedCount
                }))
            }
        case SET_PRODUCT_CARDS:
            return {
                ...state,
                list: action.list
            }
        case SET_FETCH_PRODUCT_CARDS:
            return {
                ...state,
                isFetching: action.value
            }
        default:
            return state
    }
}
