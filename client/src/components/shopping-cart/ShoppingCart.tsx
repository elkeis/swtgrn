import React from 'react';
import './shopping-cart.scss';

export interface IShoppingCart {
    products?: Array<JSX.Element>,
    price?: number,
    byCheckout?: () => {},
    isSideView?: boolean,
}

const noProductsPlaceholder = <div className="no-products">
    Корзина Пуста
</div>

export const ShoppingCart:React.FC<IShoppingCart> = ({
    products = [<div>here should be shopping cart </div>],
    price = 0,
    byCheckout = () => console.log('proceed to checkout functionality is not implemented'),
    isSideView = false,
}) => {

    const noProducts = products.length === 0;

    return <div className={[
            'ShoppingCart',
            isSideView ? 'side-view' : 'default-view'
        ].join(' ')}>

        <div className="padding">
            <div className="products">
                {
                    noProducts ? noProductsPlaceholder : products
                }
            </div>

            <div className={['footer', noProducts ? 'hide' : 'show'].join(' ')}>
                <div className="price">
                    {price}Р.
                </div>
            </div>
        </div>
    </div>
}
