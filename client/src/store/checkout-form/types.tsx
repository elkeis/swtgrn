import { CheckoutBlock } from "../../components";

export const SET_CHECKOUT_BLOCK = 'SET_CHECKOUT_BLOCK';

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_PHONE = 'UPDATE_PHONE';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const ACCEPT_FIRST_CHECKOUT_BLOCK = 'ACCEPT_FIRST_CHECKOUT_BLOCK';

export const UPDATE_DELIVERY_INFO = 'UPDATE_DELIVERY_INFO';
export const SET_SELF_DELIVERY = 'SET_SELF_DELIVERY';
export const ACCEPT_ADDRESS_BLOCK = 'ACCEPT_ADDRESS_BLOCK';

export const ACCEPT_FINAL_BLOCK = 'ACCEPT_FINAL_BLOCK';

export const SET_CHEKOUT_BLOCK_ACCEPT_STATUS = 'SET_CHEKOUT_BLOCK_ACCEPT_STATUS';

export const RESET_FORM = 'RESET_FORM';

export interface $AcceptFirstCheckoutBlock {
    type: typeof ACCEPT_FIRST_CHECKOUT_BLOCK
}

export interface $AcceptAddressBlock {
    type: typeof ACCEPT_ADDRESS_BLOCK
}

export interface $UpdateName {
    type: typeof UPDATE_NAME,
    value: string
}

export interface $UpdatePhone {
    type: typeof UPDATE_PHONE,
    value: string
}

export interface $UpdateEmail {
    type: typeof UPDATE_EMAIL,
    value: string
}

export interface $UpdateDeliveryInfo {
    type: typeof UPDATE_DELIVERY_INFO,
    value: string
}

export interface $SetSelfDelivery {
    type: typeof SET_SELF_DELIVERY,
    value: boolean
}

export interface $AcceptFinalBlock {
    type: typeof ACCEPT_FINAL_BLOCK,
}

export interface $ResetForm {
    type: typeof RESET_FORM
}

export type $CheckoutFormTypes = $AcceptFirstCheckoutBlock
    | $UpdateName
    | $UpdatePhone
    | $UpdateEmail
    | $UpdateDeliveryInfo
    | $SetSelfDelivery
    | $AcceptAddressBlock
    | $AcceptFinalBlock
    | $ResetForm

export interface $CheckoutFormFirstBlock {
    name: {
        value: string,
        isValid: boolean,
        placeholder: string,
    },

    phone: {
        value: string,
        isValid: boolean,
        placeholder: string,
    }

    email: {
        value: string,
        isValid: boolean,
        placeholder: string,
    },

    isValid: boolean,
    isAccepted: boolean
}

export interface $ChekcoutFormAddressBlock {
    deliveryInfo: {
        value: string,
        isValid: boolean
    }

    isSelfDelivery: boolean,

    isValid: boolean,
    isAccepted: boolean
}

export interface $CheckoutFormFinalBlock {
    isAccepted: boolean
}

export interface $CheckoutForm {
    checkoutBlock: CheckoutBlock,
    firstBlock: $CheckoutFormFirstBlock,
    addressBlock: $ChekcoutFormAddressBlock,
    finalBlock: $CheckoutFormFinalBlock,
}
