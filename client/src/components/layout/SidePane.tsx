import React, { useEffect } from 'react';
import './side-pane.scss';

export enum SidePaneDirection {
    LTR = 'ltr',
    RTL = 'rtl'
}

export interface ISidePane {
    isOpen?: boolean,
    direction: SidePaneDirection,
}

export const SidePane:React.FC<ISidePane> = ({
    children,
    direction,
    isOpen = true,
}) => {
    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = 'hidden';
            return () => {document.body.style.overflow = 'auto'};
        }
    }, [isOpen]);
    return <div className={[
        'SidePane',
        direction,
        isOpen ? '' : 'hide'
    ].join(' ')}>
            {children}
    </div>
}
