import React, {useState} from 'react';

export interface IAeroTumbler {
    isOn?: boolean,
    isHidden? : boolean,
    byClick?: (toggleTo: boolean) => any
}

export const AeroTumbler:React.FC<IAeroTumbler> = ({
    children,
    isOn = false,
    isHidden = false,
    byClick = (toggleTo) => console.debug(`toggle to ${toggleTo}`)
}) => {
    const defaultClasses = [isOn ? 'on' : '', isHidden ? 'hidden' : 'shown'];
    const [classes, setClasses] = useState(['']);

    return <div className="AeroTumbler">
        <button className={classes.concat(defaultClasses).join(' ')}
            onClick={() => byClick(!isOn) }
            onTouchStart={() => setClasses(['touched'])}
            onTouchEnd={() => setTimeout(() => setClasses([]), 60)}
        >
            {children}
        </button>
    </div>
}
