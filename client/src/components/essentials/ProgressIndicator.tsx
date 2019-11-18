import React from 'react';

import './progress-indicator.scss';

export interface IProgressIndicator {
    done?: boolean,
    byClick?: () => any
}

export const ProgressIndicator:React.FC<IProgressIndicator> = ({
    done = false,
    byClick = () => console.debug('click is not implemented')
}) => {
    return <div
        className={[
            'ProgressIndicator',
            done ? 'done' : ''
        ].join(' ')}
        onClick={() => byClick()}
        >
        <div className="bg">
        </div>
        <i className={[done ? 'checkmark-white' : 'checkmark'].join(' ')}></i>
    </div>
}
