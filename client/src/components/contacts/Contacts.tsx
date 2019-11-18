import React from 'react';
import './contacts.scss';

export interface IContacts {
    phone?: string,
    email?: string,
    instagram?: string,
}

export const Contacts:React.FC<IContacts> = ({
    phone = '375290000000',
    email = 'email@email.com',
    instagram = 'sweetgreen_by'
}) => {
    return <div className="Contacts">
        <div className="logo-container">
            <i className="logo-text"></i>
        </div>

        <div className="buttons-container">
            <div className="contact-button">
                <a href={'mailto:' + email}>
                    <i className="email-white"></i>
                    {email}
                </a>
            </div>

            <div className="contact-button">
                <a href={'tel:' + phone}>
                    <i className="phone-white"></i>
                    {phone}
                </a>
            </div>

            <div className="contact-button">
                <a href={`https://www.instagram.com/${instagram}/`}>
                    <i className="instagram-white"></i>
                    {`@${instagram}`}
                </a>
            </div>
        </div>

    </div>
}
