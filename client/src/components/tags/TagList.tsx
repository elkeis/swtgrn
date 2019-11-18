import React from 'react';
import './tag-list.scss';
import { TTag } from '../../services';

export interface ITagList {
    tags?: Array<TTag>
}

export const TagList:React.FC<ITagList> = ({
    tags = []
}) => {
    return <div className="TagList">
        {tags.map((t) => <span key={t.id}>#{t.name} </span>)}
    </div>
}
