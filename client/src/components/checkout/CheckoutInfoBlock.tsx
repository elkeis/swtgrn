import React from 'react';
import { TextInput, AeroButton, ITextInput } from '../essentials';

export interface ICheckoutInfoBlock {
    inputs?: Array<ITextInput>,
    isValid?: boolean
    byAccept?: () => any
}

export const CheckoutInfoBlock:React.FC<ICheckoutInfoBlock> = ({
    inputs = [],
    isValid = inputs.map(i => i.isValid).reduce((sum, v) => (sum && v), !!inputs.length),
    byAccept = () => console.debug('accepting the form is not implemented')
}) => {

    return <div className="CheckoutInfoBlock">
        {inputs.map((input, i) => (
            <TextInput
                key={i}
                {...input}
            ></TextInput>
        ))}

        <AeroButton
            isDisabled={!isValid}
            byClick={() => byAccept()} >
            <i className="checkmark"></i>
        </AeroButton>
    </div>
}
