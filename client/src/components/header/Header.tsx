import React, { useState, useEffect } from 'react';
import { AeroTumbler } from '../essentials';
import { Badge } from '../badge';

export enum HeaderTumbler {
    CART, TAGS, EVENTS, CONTACTS, DEFAULT
}

export interface IHeader {
    activeTumbler?: HeaderTumbler,
    showTumblers?: boolean,
    byToggle?: (tumbler: HeaderTumbler) => any,
    shoppingCartItemsCount?: number,
    selectedTagsCount? : number,
    eventsCount?: number,
}

export const Header:React.FC<IHeader> = ({
    activeTumbler = null,
    showTumblers = false,
    byToggle = tumbler => console.debug(`trying to toggle on ${tumbler}`),
    shoppingCartItemsCount = 0,
    selectedTagsCount = 0,
    eventsCount = 0,
}) => {
    const toggle = (tumbler: HeaderTumbler, toggleOn: boolean) => {
        if (toggleOn) {
            byToggle(tumbler);
        } else {
            byToggle(HeaderTumbler.DEFAULT);
        }
    }

    const [showTumblersFlags, setShowTumblersFlags] = useState([false, false, false, false]);
    useEffect(() => {
        if(showTumblers) {
            setTimeout(() => {
                const falseIndex = showTumblersFlags.indexOf(false);
                if (falseIndex > -1) {
                    const newFlags = [...showTumblersFlags];
                    newFlags[falseIndex] = true;
                    setShowTumblersFlags(newFlags);
                }
            }, 60);
        } else {
            if (showTumblersFlags.indexOf(true) > -1) {
                setShowTumblersFlags([false, false, false, false]);
            }
        }
    }, [showTumblers, setShowTumblersFlags, showTumblersFlags])


    return <div className={['Header', showTumblers ? 'show-shadow' : ''].join(' ')}>
        <div className="container">

            <div className="text-brand">
                <i className="logo-text"></i>
            </div>

            <div className="tumbler">
                <div className="badge-container">
                    <Badge
                        content={shoppingCartItemsCount}
                        isHidden={!showTumblersFlags[0] || activeTumbler === HeaderTumbler.CART}
                    ></Badge>
                </div>
                <AeroTumbler
                    isHidden={!showTumblersFlags[0]}
                    isOn={activeTumbler === HeaderTumbler.CART}
                    byClick={toggleOn => toggle(HeaderTumbler.CART, toggleOn)}>
                    <i className="shopping-cart"></i>
                </AeroTumbler>
            </div>

            <div className="tumbler">
                <div className="badge-container">
                    <Badge
                        content={selectedTagsCount}
                        isHidden={!showTumblersFlags[1] || activeTumbler === HeaderTumbler.TAGS}
                    ></Badge>
                </div>
                <AeroTumbler
                    isHidden={!showTumblersFlags[1]}
                    isOn={activeTumbler === HeaderTumbler.TAGS}
                    byClick={toggleOn => toggle(HeaderTumbler.TAGS, toggleOn)}>
                    <i className="pricetag"></i>
                </AeroTumbler>
            </div>

            <div className="brand">
                <i className="brand" onClick={() => byToggle(HeaderTumbler.DEFAULT)}></i>
            </div>

            <div className="tumbler">
                <div className="badge-container">
                    <Badge
                        content={eventsCount}
                        isHidden={!showTumblersFlags[2] || activeTumbler === HeaderTumbler.EVENTS}
                    ></Badge>
                </div>
                <AeroTumbler
                    isHidden={!showTumblersFlags[2]}
                    isOn={activeTumbler === HeaderTumbler.EVENTS}
                    byClick={toggleOn => toggle(HeaderTumbler.EVENTS, toggleOn)}>
                    <i className="flash"></i>
                </AeroTumbler>
            </div>

            <div className="tumbler">
                <AeroTumbler
                    isHidden={!showTumblersFlags[3]}
                    isOn={activeTumbler === HeaderTumbler.CONTACTS}
                    byClick={toggleOn => toggle(HeaderTumbler.CONTACTS, toggleOn)}>
                    <i className="phone"></i>
                </AeroTumbler>
            </div>
        </div>
    </div>
}
