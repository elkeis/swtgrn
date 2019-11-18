import React, { useEffect, useState } from 'react';
import './badge.scss';

export interface IBadge {
    content?: number,
    isLarge? : boolean,
    isHidden?: boolean,
    inline?: boolean,
}

export const Badge:React.FC<IBadge> = ({
    content = 0,
    isLarge = false,
    isHidden = false,
    inline = false,
}) => {
    const [isVisible, setVisible] = useState(content > 0);
    const [change, setChange] = useState(false);
    const [large, setLarge] = useState(false);

    useEffect(() => {
        setVisible(content > 0);


        if(content > 9) {
            setLarge(true);
        } else {
            setLarge(false);
        }

        setChange(true);
        const t = setTimeout(() => {
            setChange(false);
        }, 500);

        return () => clearTimeout(t);

    }, [content]);


    return <div className={[
            'Badge',
            isVisible && !isHidden ? 'show' : 'hide',
            isLarge ? 'large' : '',
            inline ? 'inline' : ''
        ].join(' ')}>
        <div className={[
            'item',
            large ? 'large': '',
            change ? 'change': ''
            ].join(' ')}>{content}</div>
    </div>
}
