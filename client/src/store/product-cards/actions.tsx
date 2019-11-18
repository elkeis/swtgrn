import {
    UPDATE_PRODUCT_CARD,
    $ProductCardsActionTypes,
} from "./types";

export function updateProductCard(cardId: number, newCount: number): $ProductCardsActionTypes {
    return {
        type: UPDATE_PRODUCT_CARD,
        addedCount: newCount,
        id: cardId,
    }
}
