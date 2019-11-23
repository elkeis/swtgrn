import './tags.scss';
import React, { useMemo } from 'react';
import { Tag } from './Tag';
import { ProductsCount } from './ProductsCount';
import { Tag as TTag } from '../../services';

export interface ITags {
    all?: Array<TTag>,
    selected?: Array<TTag>,
    byUpdateSelection?: (tags: Array<TTag>) => any,
    byClickOnMessage? : () => any,
    productsCount?: number,
}

export const Tags:React.FC<ITags> = ({
    all = [],
    selected = [],
    byUpdateSelection = tags => console.debug(`selected tags can't be updated with ${tags}  (not implemented)`),
    productsCount = -1,
    byClickOnMessage = () => console.debug('click on message is not implemented')
}) => {
    const tags = useMemo(() => all.map(t => ({
            value: t,
            isSelected: selected.indexOf(t) > -1
    })), [selected, all])

    return <div className="Tags">
        <ProductsCount
            count={productsCount}
            isEnabled={selected.length > 0}
            byClick={() => byClickOnMessage()}
        ></ProductsCount>
        <div className="tags-container">
            {tags.map((t,i) => <Tag
                key={i}
                {...t}
                bySelect={() => byUpdateSelection([...selected, t.value])}
                byDeselect={() => byUpdateSelection(selected.filter(tag => tag !== t.value))}
            ></Tag>)}
        </div>
    </div>
}
