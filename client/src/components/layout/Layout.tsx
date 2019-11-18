import React, { useEffect, useRef, useState } from 'react';
import {
    debounce
} from 'lodash';

export enum LayoutOffset {
    LEFT = 'left',
    MIDDLE = 'middle',
    RIGHT = 'right'
}

export interface ILayout {
    startingScreen?: JSX.Element,
    header?: JSX.Element,
    catalog?: JSX.Element,
    shoppingCart?: JSX.Element,
    checkoutForm?: JSX.Element,

    byScrollToCatalog?: () => any,
    byScrollToTop?: () => any,
    isSidePaneOpen?: boolean,
}

export const Layout:React.FC<ILayout> = ({
    startingScreen = <div>starting screen</div>,
    header = <div>catalog header</div>,
    catalog = <div>catalog body</div>,
    shoppingCart = <div>shopping cart container</div>,
    checkoutForm = <div>checkout form container </div>,

    byScrollToCatalog = () => console.debug('scrolled to catalog'),
    byScrollToTop = () => console.debug('scrolled to top'),
    isSidePaneOpen = false,
}) => {

    const catalogRef = useRef<any>();
    const [isOnStartingScreen, setOnStartingScreen] = useState(true);

    useEffect(() => {
        const handler = debounce(e => {
            if (isOnStartingScreen) {
                const rect = catalogRef.current.getBoundingClientRect();
                if (rect.top <= 0) {
                    setOnStartingScreen(false);
                    byScrollToCatalog();
                }
            } else {
                if (window.pageYOffset === 0) {
                    setOnStartingScreen(true);
                    byScrollToTop();
                }
            }
        }, 100);
        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler);
        }
    }, [isOnStartingScreen, byScrollToCatalog, byScrollToTop]);

    return <div className="Layout">


        <div className="starting-screen">
            {startingScreen}
        </div>

        <div className={['catalog', isOnStartingScreen ? 'stop-scroll' : ''].join(' ')} ref={catalogRef}>
            <div className="header">
                {header}
            </div>

            <div className={['body'].join(' ')}>
                <div className={[
                    'content',
                ].join(' ')}>
                    {catalog}
                </div>
            </div>
        </div>
        <div
            className={[
                'shopping-cart-container',
                isOnStartingScreen ? 'hide' : 'show',
                isSidePaneOpen ? 'hide' : 'show',
            ].join(' ') }>

            <div className="header">
                <i className="shopping-cart"></i>
            </div>

            {shoppingCart}
        </div>

        <div className={[
            'checkout-form-container',
            isOnStartingScreen ? 'hide' : 'show',
            isSidePaneOpen ? 'hide' : 'show',
        ].join(' ') }>
            {checkoutForm}
        </div>
    </div>
}
