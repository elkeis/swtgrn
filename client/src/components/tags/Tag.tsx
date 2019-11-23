import React from 'react';
import { Tag as TTag } from '../../services';

export interface ITag {
    value: TTag,
    isSelected: boolean,
    bySelect: () => any,
    byDeselect: () => any,

}

export const Tag:React.FC<ITag> = ({
    value,
    isSelected = false,
    bySelect,
    byDeselect
}) => {
    return <div className={[
        'Tag',
        isSelected ? 'selected' : ''
    ].join(' ')}
        onClick={() => {
            if (isSelected) {
                byDeselect();
            } else {
                bySelect();
            }
        }}
    >
        #{value.name}
    </div>
}
