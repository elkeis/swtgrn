import React from 'react';
import { AeroButton } from './AeroButton';

export interface IAeroButtonAdd {
    highlight? : boolean,
    showSubstract? : boolean,
    byAdd?: () => any,
    bySubstract?: () => any,
}

export const AeroButtonAdd:React.FC<IAeroButtonAdd> = ({
    highlight = true,
    showSubstract = false,
    byAdd = () => console.log('clicked add'),
    bySubstract = () => console.log('clicked substract')
}) => {

    return <div className="AeroButtonAdd">
        <div className="addition">
            <div className={showSubstract ? 'show' : ''}>
                <AeroButton small byClick={bySubstract}>
                    <i className="minus"></i>
                </AeroButton>
            </div>
        </div>
        <AeroButton byClick={byAdd}>
            <div className={['icons', showSubstract ? 'clicked' : '', highlight ? 'highlight' : ''].join(' ')}>
                <i className="shopping-cart default"></i>
                <i className={[highlight ? 'plus-white' : 'plus',  'alternate'].join(' ')}></i>
            </div>
        </AeroButton>
    </div>
}
