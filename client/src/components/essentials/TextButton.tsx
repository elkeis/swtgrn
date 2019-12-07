import React from 'react';
import './text-button.scss';

export interface ITextButton {
    byClick?: () => any,
    isDisabled?: boolean,
}

export const TextButton:React.FC<ITextButton> = ({
    children,
    byClick = () => console.log('click not setted up'),
    isDisabled = false,
}) => {
    return <div className="TextButton">
        <button onClick={() => byClick()}>
            children
        </button>
    </div>
}
