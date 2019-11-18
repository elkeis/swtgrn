import {
    IProductCard
} from '../../components';

export const UPDATE_PRODUCT_CARD = 'UPDATE_PRODUCT_CARD';

export interface $UpdateProductCardAction {
    type: typeof UPDATE_PRODUCT_CARD,
    addedCount: number,
    id: number
}


export interface $ProductCards {
    list: Array<IProductCard>,
    isFetching: boolean,
    errors: Array<string>,
}

export type $ProductCardsActionTypes = $UpdateProductCardAction;
