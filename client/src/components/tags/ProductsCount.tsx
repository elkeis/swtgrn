import React from 'react';

export interface IProductsCount {
    count?: number,
    isEnabled?: boolean,
    byClick?: () => any,
}

export const ProductsCount:React.FC<IProductsCount> = ({
    count = -1,
    isEnabled = false,
    byClick = () => console.debug('by click is not implemented')
}) => {
    if (count < 0) { return null }

    let text = <span>Выберите желаемые ингридиенты</span>;

    if (isEnabled) {
        if (count === 0) {
            text = <span className="underline">У нас нет десертов с выбранными ингридиентами :(</span>
        } else if (count === 1) {
            text = <> <span className="underline">У нас есть</span>  <span className="count">{count}</span> <span className="underline">пироженное с выбранными ингридиентами</span></>
        } else if (count > 1) {
            text = <><span className="underline">У нас есть</span> <span className="count">{count}</span> <span className="underline">пироженных с выбранными ингридентами</span> </>
        }
    }

    return <div className="ProductsCount" onClick={() => {
        if (isEnabled ) {
            byClick()
        }
    }}>
        {text}
    </div>
}
