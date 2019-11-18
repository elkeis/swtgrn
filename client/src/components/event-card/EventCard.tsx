import React from 'react';
import './event-card.scss';


export interface IEventCard {
    imageUrl?: string,
    description?: string,
    name?: string,
    price?: number,
}

const url = require('./circle-pies.jpg');

export const EventCard:React.FC<IEventCard> = ({
    imageUrl = url,
    name = 'name',
    price = '-1',
    description = 'Купите 10 пирожных и получите одно в подарок'
}) => {
    return <div className="EventCard">
        <div className="image" style={{
            backgroundImage: `url(${url})`
        }}>
        </div>
        <div className="footer">
            <div className="main-info">
                <div className="name">
                    {name}
                </div>
                <div className="price">
                    {price}Р.
                </div>
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    </div>
}
