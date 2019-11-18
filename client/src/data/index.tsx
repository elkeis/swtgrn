import { TTag, TProduct } from '../services';
import {
    uniq,
} from 'lodash';

import choco from './choco';
import comcvat from './comcvat';
import drop from './drop';
import heartrose from './heartrose';
import lemon from './lemon';
import marmur from './marmur';
import valvet from './velvet';
import whitesnow from './whitesnow';
import whitezag from './whitezag';
import zigzag from './zigzag';


const PRODUCTS = [
    choco,
    comcvat,
    drop,
    heartrose,
    lemon,
    marmur,
    valvet,
    whitesnow,
    whitezag,
    zigzag,
].map((p,i) => ({
    id: i,
    imageUrl: p.картинка,
    name: p.название,
    description: p.описание,
    tags: p.тэги,
    price: p.цена
}));


export const tags: Array<TTag> = uniq(PRODUCTS.flatMap(p => p.tags)).map((t,i) => ({
    id: i,
    name: t
}));

export const products: Array<TProduct> = PRODUCTS.map((p,i) => ({
    id: i,
    ...p,
    tags: p.tags.map<TTag>(t => {
        const currentTag = tags.find(tag => tag.name === t);
        if (!currentTag) {
            throw new Error(`tag ${t} is not found`);
        }
        return currentTag;
    })
}));
