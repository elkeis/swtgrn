import React from 'react';
import './text-area.scss';

export interface ITextArea {
    placeholder?: string,
    value?: string,
    isDisabled?: boolean,
    isValid? : boolean,
    byChange?: (newValue: string) => any
}

export const TextArea:React.FC<ITextArea> = ({
    placeholder = '',
    value = '',
    isDisabled = false,
    isValid = true,
    byChange = newValue => console.debug(`update text area with ${newValue} (not implemented)`)
}) => {
    return <div className={[
            'TextArea',
            isDisabled ? 'disabled' : '',
            isValid ? 'valid' : ''
        ].join(' ')}>
        <textarea
            value={value}
            placeholder={placeholder}
            disabled={isDisabled}
            onChange={e => byChange(e.target.value)}
        ></textarea>
    </div>
}
