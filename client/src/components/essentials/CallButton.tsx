import React from 'react';
import './call-button.scss';

export interface ICallButton {
    phone?: string
}

export const CallButton:React.FC<ICallButton> = ({
    phone = '+375290000000'
}) => {
    return <div className="CallButton">
        <a href={'tel:' + phone}>
            <i className="phone-white"></i>
        {phone}</a>
    </div>
}
