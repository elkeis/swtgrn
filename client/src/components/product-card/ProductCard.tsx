import React, { useRef, useEffect, useState } from 'react';
import { AeroButtonAdd } from '../essentials';
import { Layover } from './Layover';
import { debounce } from 'lodash';

import {
    Product
} from '../../services';
import { TagList } from '../tags';

const url = require('./images/pie-optimized_f2.jpg');

export interface IProductCard {
    id: number
    product: Product
    addedCount: number,
    byCountUpdate?: (newCount: number) => any | undefined
}

export const ProductCard:React.FC<IProductCard> = ({
    product: {
        id = -1,
        imageUrl = url,
        name = 'product name',
        price = 5.5,
        tags = [],
        description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    addedCount = 0,
    byCountUpdate = newCount => console.log(`update addedCount with addedCount:${newCount} (not implemented)`)

}) => {

    const image = useRef<HTMLDivElement>(null);
    const [imageHeight, setImageHeight] = useState<number | null>(null);
    useEffect(() => {
        const handler = debounce(() => {
            setImageHeight((image && image.current && image.current.getBoundingClientRect().height) || null);
        }, 60);
        window.addEventListener('resize', handler);
        handler();
        return () => {
            window.removeEventListener('resize', handler);
        }
    }, [])

    return <div className="Product" >
        <div className="image" style={ { backgroundImage: `url(${imageUrl})` } } ref={image}>
            <Layover
                height={imageHeight}
                shortContent={
                    <TagList tags={tags}></TagList>
                }
                longContent={
                    <div> {description} </div>
                }
            ></Layover>
            <div className="elements">
                <div className="elements-container">
                    {
                        Array(addedCount).fill(0).map((v, i) => {
                            return <div key={i} className="item-container">
                                <i className="pie-piece"></i>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="background"></div>
            <div className="content">
                <div className="name">{name}</div>
                <div className="controls">
                    <AeroButtonAdd
                        byAdd={() => byCountUpdate(addedCount + 1)}
                        bySubstract={() => byCountUpdate(Math.max(0, addedCount - 1))}
                        showSubstract={addedCount > 0}
                    ></AeroButtonAdd>
                </div>
                <div className="price">{price}P.</div>
            </div>
        </div>
    </div>
}
