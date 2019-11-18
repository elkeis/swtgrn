import React from 'react';
import { ProductCardSmall, IProductCardSmall } from '../product-card';
import { AeroButton } from '../essentials';

export interface ICheckoutDoublecheckBlock {
    products?: Array<IProductCardSmall>,
    name?: string,
    phone?: string,
    email?: string,
    address?: string,
    isSelfDelivery?: boolean,
    byAccept?: () => any,
}

export const CheckoutDoublecheckBlock:React.FC<ICheckoutDoublecheckBlock> = ({
    products = [],
    name = '',
    phone = '',
    email = '',
    address = '',
    isSelfDelivery = false,
    byAccept = () => console.debug('checkout doublecheck block accept is not implemented')
}) => {
    return <div className="CheckoutDoublecheckBlock">
    <div className="header">Пожалуйста Подтвердите Заказ</div>
    <div className="products">
        {products.map(p => (
            <ProductCardSmall
                key={p.id}
                {...p}
                compactView={true}
            >
            </ProductCardSmall>
        ))}
    </div>

    <div className="info">
        <div className="info-block">
            <span>имя:</span> {name}
        </div>

        <div className="info-block">
            <span>телефон:</span> {phone}
        </div>

        <div className="info-block">
            <span>email:</span> {email}
        </div>

        <div className="info-block">
            <span>Доставка:</span> {
                isSelfDelivery ?
                'самовывоз' : address
            }
        </div>

        <div className="info-block price">
            <span>Цена:</span> {
                products.map(p => (p.addedCount * (p.product.price || 0))).reduce((sum, price) => sum + price, 0)
            } Р. {isSelfDelivery ? '' : ' + доставка'}
        </div>
    </div>

    <div className="controls">
        <AeroButton
            byClick={() => byAccept()}
        >
            <i className="checkmark"></i>
        </AeroButton>
    </div>
</div>
}
