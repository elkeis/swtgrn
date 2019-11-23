import {
    UPDATE_PRODUCT_CARD,
    $ProductCardsActionTypes,
    $SetFetchProductCardsAction,
    SET_FETCH_PRODUCT_CARDS,
    $SetProducCardsAction,
    SET_PRODUCT_CARDS,
} from "./types";
import { IProductCard } from "../../components";

export function updateProductCard(cardId: number, newCount: number): $ProductCardsActionTypes {
    return {
        type: UPDATE_PRODUCT_CARD,
        addedCount: newCount,
        id: cardId,
    }
}

export function setFetchProductCardsAction(value: boolean): $SetFetchProductCardsAction {
    return {
        type: SET_FETCH_PRODUCT_CARDS,
        value
    }
}

export function setProductCardsAction(value: Array<IProductCard>): $SetProducCardsAction {
    return {
        type: SET_PRODUCT_CARDS,
        list: value
    }
}
