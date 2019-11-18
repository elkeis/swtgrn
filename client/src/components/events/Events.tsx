import React from 'react';
import './events.scss';

import { IEventCard, EventCard } from '../event-card';

export interface IEvents {
    events: Array<IEventCard>,

}

export const Events:React.FC<IEvents> = ({
    events = []
}) => {
    return <div className="Events">
        {events.map(e => <EventCard {...e}></EventCard>)}
    </div>
}
