import { useSelector } from "react-redux";

import {
    $App,
} from '../store';

import {
    intersection
} from 'lodash';

import { IProductCard } from "../components";

/**
 * return list of products which contains selected tags (OR logic)
 */
export function useFilteredProducts() {
    const productCards = useSelector<$App, Array<IProductCard>>(state => {
        if (state.tags.selected.length > 0) {
            return state.productCards.list.filter(pc => {
                const int = intersection(state.tags.selected.map(t => t.id), pc.product.tags.map(t => t.id));
                return int.length > 0;
            })
        } else {
            return state.productCards.list
        }
    });

    return productCards;
}
