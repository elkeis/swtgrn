import React, { useState, useEffect, useRef } from 'react';
import './layover.scss';

export interface ILayover {
    shortContent?: JSX.Element,
    longContent?: JSX.Element,
    height?: number | null,
}

export const Layover:React.FC<ILayover> = ({
    shortContent = <span>short content</span>,
    longContent = <span> long content </span>,
    height = null
}) => {

    const [showDetails, setShowDetails] = useState(false);

    const [backgoundStyle, setBackgoundStyle] = useState<any>(null);
    const [expandedContentStyle, setExpandedContentStyle] = useState<any>(null);

    const [lock, setLock] = useState(false);


    const layover = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (showDetails) {
            timeout = setTimeout(() => {
                setBackgoundStyle({height});
                setExpandedContentStyle({height});
            }, 300);
        } else {
            timeout = setTimeout(() => {
                setBackgoundStyle(null);
                setExpandedContentStyle(null);
            }, 300);
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
;            }
        }
    }, [showDetails, height])

    return <div className="Layover" ref={layover}>
        <div className="details" style={backgoundStyle} onClick={() => {
            if (!lock) {
                setShowDetails(!showDetails);
                setLock(true);
                setTimeout(() => setLock(false), 2000);
            }
        }}>

            <div className={'background'}></div>

            <div
                className={['content',  showDetails ? 'hide' : 'show'].join(' ')}
            >
                <i className="eye"></i>
                {shortContent}
            </div>

            <div
                className={['expanded-content', showDetails ? 'show' : 'hide'].join(' ')}
                style={expandedContentStyle}>

                <div className="description">
                    {longContent}
                </div>
                <div className="short"> {shortContent} </div>
                <i className="eye-off"></i>

            </div>
        </div>
    </div>
}
