import React, { useState } from 'react';
import './buttons.scss';

export interface IAeroButton {
    byClick?: () => any,
    small?: boolean,
    isDisabled?: boolean,
}

export const AeroButton:React.FC<IAeroButton> = ({
    children,
    byClick = () => console.log('click not setted up'),
    small =  false,
    isDisabled = false,
}) => {

    const [classes, setClasses] = useState(['']);

    return <div className={[
                'AeroButton',
                small ? 'small' : '',
                isDisabled  ? 'disabled' : ''
            ].join(' ')}>

            <button
                onClick={byClick}
                className={classes.join(' ')}
                disabled={isDisabled}
                onTouchStart={() => setClasses(['touched'])}
                onTouchEnd={() => setClasses([])}
            >
                {children}
            </button>
    </div>
}
