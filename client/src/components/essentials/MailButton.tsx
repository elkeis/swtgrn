import React from 'react';
import './mail-button.scss';

export interface IMailButton {
    email?: string
}

export const MailButton:React.FC<IMailButton> = ({
    email = 'no-mail'
}) => {
    return <div className="MailButton">
        <a href={'mailto:' + email}>
            <i className="email-white"></i>
            {email}
        </a>
    </div>
}
