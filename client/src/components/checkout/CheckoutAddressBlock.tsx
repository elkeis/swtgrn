import React from 'react';
import { ITextArea, IAeroTumbler, TextArea, AeroTumbler, AeroButton } from '../essentials';

export interface ICheckoutAddressBlock {
    address?: ITextArea,
    selfDelivery?: IAeroTumbler,
    isValid?: boolean,
    byAccept?: () => any,
}

export const CheckoutAddressBlock:React.FC<ICheckoutAddressBlock> = ({
    address = null,
    selfDelivery = null,
    isValid = false,
    byAccept = () => console.debug('by accept is not implemented on CheckoutAddressBlock'),
}) => {
    return <div className="CheckoutAddressBlock">
        <TextArea {...address}></TextArea>

        <div className="self-delivery">
            <AeroTumbler {...selfDelivery}>
                <i className="car"></i>
            </AeroTumbler>

            самовывоз
        </div>

        <AeroButton
            isDisabled={!isValid}
            byClick={() => byAccept()} >
            <i className="checkmark"></i>
        </AeroButton>
    </div>
}
