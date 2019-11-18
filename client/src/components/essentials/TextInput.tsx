import React from 'react';
import './text-input.scss';

export enum InputType {
    TEXT = 'text',
    PHONE = 'tel',
    EMAIL = 'email'
}

export interface ITextInput {
    value?: string,
    isValid?: boolean,
    type?: InputType,
    placeholder?: string,

    byUpdate?: (newValue: string) => any,
    byTouch?: () => any,
}

export const TextInput:React.FC<ITextInput> = ({
    type = InputType.TEXT,
    value = '',
    isValid = false,
    placeholder = 'text',

    byUpdate = (value: string) => console.debug(`Update with (${value}) is not implemented`)
}) => {

    return <div className="TextInput">
        <input
            type={type}
            value={value}
            onChange={(e) => byUpdate(e.target.value)}
            placeholder={placeholder}
            className={[
                isValid ? 'valid' : '',
            ].join(' ')}
        />
    </div>
}
