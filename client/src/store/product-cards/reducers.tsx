import {
    $ProductCardsActionTypes,
    $ProductCards,
    UPDATE_PRODUCT_CARD,
} from "./types";

import {
    products
} from '../../data';

import { FETCH_DATA_START, FETCH_DATA_FAILURE, $CommonActionTypes, FETCH_DATA_SUCCESS } from "../types";
import { TProduct } from "../../services";

const initialState: $ProductCards  = {
    list: products.map((p,i) => ({
        id: i,
        addedCount: 0,
        product: p
    })),
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
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                errors: [...state.errors, FETCH_DATA_FAILURE]
            }
        case FETCH_DATA_SUCCESS:
            const products: Array<TProduct> = action.value.get('products');
            return {
                ...state,
                isFetching: false,
                list: products.map(product => ({
                    id: product.id,
                    addedCount: 0,
                    product
                }))
            }
        default:
            return state
    }
}
