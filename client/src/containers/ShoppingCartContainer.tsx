import React from 'react';
import {
    ProductCardSmall, ShoppingCart, IProductCard
} from '../components';


import {
    $App, updateProductCard, setShowCheckoutForm
} from '../store'
import { useSelector, useDispatch } from 'react-redux';

export interface IShoppingCartContainer {
    isSideView? : boolean,
}

export const ShoppingCartContainer:React.FC<IShoppingCartContainer> = ({
    isSideView = false,
}) => {


    const productCards = useSelector<$App, Array<IProductCard>>(state => state.productCards.list.filter(card => card.addedCount > 0));

    const dispatch = useDispatch();

    return <>
        <ShoppingCart
            isSideView={isSideView}
            products={
                productCards.map(productCard => (
                    <ProductCardSmall
                        showControls={true}
                        key={productCard.id}
                        {...productCard}
                        byCountUpdate={newCount => { dispatch(updateProductCard(productCard.id, newCount))} }
                    ></ProductCardSmall>
                ))
            }
            price={
                productCards
                    .map(pc => (pc.addedCount * (pc.product.price || 0)))
                    .reduce((sum, val) => (sum + val), 0)
            }
            byCheckout={() => dispatch(setShowCheckoutForm(true))}
        >
        </ShoppingCart>
    </>
}
