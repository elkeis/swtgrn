import React from 'react';

import {
    IProductCard
} from './ProductCard';

import { AeroButtonAdd } from '../essentials';
import { Badge } from '../badge';
import { TagList } from '../tags';

const url = require('./images/pie-optimized_f2.jpg');

export interface IProductCardSmall extends IProductCard {
    showControls?: boolean,
    compactView?: boolean,
}

export const ProductCardSmall:React.FC<IProductCardSmall> = ({
    product: {
        id = -1,
        imageUrl = url,
        name = 'product name',
        price = 5.5,
        tags = [],
        description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    addedCount = 0,
    byCountUpdate = newCount => console.log(`update addedCount with addedCount:${newCount} (not implemented)`),
    showControls = false,
    compactView = false,
}) => {
    return <div className={[
        'ProductCardSmall',
        compactView ? 'compact-view' : ''
        ].join(' ')}>
        <div className="product-view">

            <div className="count-badge">
                <Badge
                    content={addedCount}
                    isLarge={true}
                > </Badge>
            </div>

            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }}>
            </div>

            <div className={[
                'controls',
                showControls ? 'show' : 'hide'
                ].join(' ')}>

                <AeroButtonAdd
                    highlight={false}
                    byAdd={() => byCountUpdate(addedCount + 1)}
                    bySubstract={() => byCountUpdate(Math.max(0, addedCount - 1))}
                    showSubstract={addedCount > 0}
                ></AeroButtonAdd>
            </div>
        </div>
        <div className="description">
            <div className="name">{name}</div>
            <div className="tags"> <TagList tags={tags}></TagList></div>
        </div>
    </div>
}
