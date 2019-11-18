import React, { useState, useEffect } from 'react';
import './checkout-form.scss';
import {
    ProgressIndicator,
} from '../essentials';

export enum CheckoutBlock {
    FIRST, SECOND, THIRD, FOURTH
}

export interface ICheckoutForm {

    activeBlock?: CheckoutBlock,
    progress?: [boolean, boolean, boolean]

    byChangeActiveBlock?: (block: CheckoutBlock) => any,
    byCloseForm?: () => any,

    firstBlock?: JSX.Element,
    secondBlock?: JSX.Element,
    thirdBlock?: JSX.Element,
    fourthBlock?: JSX.Element,
}

export const CheckoutForm:React.FC<ICheckoutForm> = ({
    progress = [false, false, false],
    activeBlock = CheckoutBlock.FIRST,
    byChangeActiveBlock = block => console.debug(`change active block ${block} is not implemented`),
    byCloseForm = () => console.log('close form'),

    firstBlock = <div>here should be first block</div>,
    secondBlock = <div>here should be the second block</div>,
    thirdBlock = <div>here should be the third block</div>,
    fourthBlock = <div>here should be the fourth block</div>
}) => {

    const [blocksOffset, setBlocksOffset] = useState({
        left: `0%`
    });

    useEffect(() => {
        let left = 0;
        switch (activeBlock) {
            case CheckoutBlock.FIRST:
                left = 0;
                break;
            case CheckoutBlock.SECOND:
                left = -100;
                break;
            case CheckoutBlock.THIRD:
                left = -200
                break;
            case CheckoutBlock.FOURTH:
                left = -300
                break;
            default: return;
        }

        setBlocksOffset({
            left: `${left}%`
        });
    }, [activeBlock]);

    return <div className="CheckoutForm">
        <div className="progress">
            <ProgressIndicator
                done={progress[0]}
                byClick={() => byChangeActiveBlock(CheckoutBlock.FIRST)}
            ></ProgressIndicator>
            <ProgressIndicator
                done={progress[1]}
                byClick={() => byChangeActiveBlock(CheckoutBlock.SECOND)}
                ></ProgressIndicator>
            <ProgressIndicator
                done={progress[2]}
                byClick={() => byChangeActiveBlock(CheckoutBlock.THIRD)}
            ></ProgressIndicator>
        </div>

        <div className="scrollable-area" style={blocksOffset}>
            <div className={[
                'block',
                activeBlock === CheckoutBlock.FIRST ? 'active' : 'active'].join(' ')}>
                {firstBlock}
            </div>

            <div className={[
                'block',
                activeBlock === CheckoutBlock.SECOND ? 'active' : 'active'].join(' ')}>
                {secondBlock}
            </div>

            <div className={[
                'block',
                activeBlock === CheckoutBlock.THIRD ? 'active' : ''].join(' ')}>
                {thirdBlock}
            </div>

            <div className={[
                'block',
                activeBlock === CheckoutBlock.FOURTH ? 'active' : 'active'].join(' ')}>
                {fourthBlock}
            </div>
        </div>
    </div>
}
