import {
    IProductCard
} from '../../components';

export const UPDATE_PRODUCT_CARD = 'UPDATE_PRODUCT_CARD';

export const SET_FETCH_PRODUCT_CARDS = 'SET_FETCH_PRODUCT_CARDS';

export const SET_PRODUCT_CARDS = 'SET_PRODUCT_CARDS';

export interface $UpdateProductCardAction {
    type: typeof UPDATE_PRODUCT_CARD,
    addedCount: number,
    id: number
}

export interface $SetFetchProductCardsAction {
    type: typeof SET_FETCH_PRODUCT_CARDS,
    value: boolean
}

export interface $SetProducCardsAction {
    type: typeof SET_PRODUCT_CARDS,
    list: Array<IProductCard>
}

export interface $ProductCards {
    list: Array<IProductCard>,
    isFetching: boolean,
    errors: Array<string>,
}

export type $ProductCardsActionTypes = $UpdateProductCardAction | $SetFetchProductCardsAction | $SetProducCardsAction;
