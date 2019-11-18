import React from 'react';
import { ProductCard, IProductCard } from '../components';
import {
    updateProductCard
} from '../store';

import {
    useFilteredProducts
} from './selectors';

import {useDispatch} from 'react-redux';

export interface IProductCards {
    list: Array<IProductCard>
}

export const ProductCardsContainer:React.FC = () => {
    const products = useFilteredProducts();
    const dispatch = useDispatch();

    return <>
        {products.map(p =>
            <ProductCard
                byCountUpdate={newCount => { dispatch(updateProductCard(p.id, newCount))} }
                key={p.id}
                {...p}
            ></ProductCard>
        )}
    </>
}
