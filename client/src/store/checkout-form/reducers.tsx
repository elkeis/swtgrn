import {
    isMobilePhone,
    isEmail,
} from 'validator'

import {
    CheckoutBlock
} from '../../components';

import {
    $CheckoutForm,
    $CheckoutFormTypes,
    UPDATE_NAME,
    $CheckoutFormFirstBlock,
    ACCEPT_FIRST_CHECKOUT_BLOCK,
    UPDATE_PHONE,
    UPDATE_EMAIL,
    $ChekcoutFormAddressBlock,
    UPDATE_DELIVERY_INFO,
    SET_SELF_DELIVERY,
    ACCEPT_ADDRESS_BLOCK,
    ACCEPT_FINAL_BLOCK,
    $CheckoutFormFinalBlock,
    RESET_FORM
} from "./types";

const initialState: $CheckoutForm = {
    checkoutBlock: CheckoutBlock.FIRST,
    firstBlock: {
        name: {
            value: '',
            isValid: false,
            placeholder: 'Имя'
        },

        phone: {
            value: '',
            isValid: false,
            placeholder: 'Телефон (+375XXXXXXXXX)'
        },

        email: {
            value: '',
            isValid: false,
            placeholder: 'email'
        },

        isValid: false,
        isAccepted: false,
    },

    addressBlock: {
        deliveryInfo: {
            value: '',
            isValid: false
        },
        isSelfDelivery: false,
        isValid: false,
        isAccepted: false
    },
    finalBlock: {
        isAccepted: false
    }
}

export function checkoutBlockReducer (
    state = initialState.checkoutBlock,
    action: $CheckoutFormTypes
): CheckoutBlock {
    switch (action.type) {
        case ACCEPT_FIRST_CHECKOUT_BLOCK:
            return CheckoutBlock.SECOND
        case ACCEPT_ADDRESS_BLOCK:
            return CheckoutBlock.THIRD
        case ACCEPT_FINAL_BLOCK:
            return CheckoutBlock.FOURTH
        case RESET_FORM:
            return initialState.checkoutBlock
        default: return state;
    }
}

export function firstBlockReducer (
    state = initialState.firstBlock,
    action: $CheckoutFormTypes
): $CheckoutFormFirstBlock {
    switch (action.type) {
        case ACCEPT_FIRST_CHECKOUT_BLOCK:
            return {
                ...state,
                isAccepted: true
            }

        case UPDATE_NAME : {
            const isNameValid = action.value.length > 1;
            const isValidForm = state.email.isValid && state.phone.isValid && isNameValid;
            return {
                ...state,
                name: {
                    ...state.name,
                    value: action.value,
                    isValid: isNameValid
                },

                isAccepted: false,
                isValid: isValidForm
            }
        }
        case UPDATE_PHONE : {
            const isValidPhone = isMobilePhone(action.value, 'be-BY');
            const isValidForm = isValidPhone && state.email.isValid && state.name.isValid;
            return {
                ...state,
                phone: {
                    ...state.phone,
                    value: action.value,
                    isValid: isValidPhone
                },
                isValid: isValidForm
            }
        }

        case UPDATE_EMAIL : {
            const isValidEmail = isEmail(action.value);
            const isValidForm = isValidEmail && state.phone.isValid && state.name.isValid;
            return {
                ...state,
                email: {
                    ...state.email,
                    value: action.value,
                    isValid: isValidEmail
                },
                isValid: isValidForm
            }
        }

        case RESET_FORM : {
            return {
                ...initialState.firstBlock
            }
        }

        default: return state
    }
}

export function checkoutFormAddressBlockReducer (
    state = initialState.addressBlock,
    action: $CheckoutFormTypes
): $ChekcoutFormAddressBlock {
    switch(action.type) {
        case UPDATE_DELIVERY_INFO:
            const isValidDeliveryInfo = action.value.length > 5;
            return {
                ...state,
                deliveryInfo: {
                    value: action.value,
                    isValid: isValidDeliveryInfo
                },

                isValid: isValidDeliveryInfo,
                isAccepted: false,
            }

        case SET_SELF_DELIVERY:
            const isFormValid = action.value || state.deliveryInfo.value.length > 5;
            return {
                ...state,
                isSelfDelivery: action.value,
                isValid: isFormValid,
                isAccepted: false,
            }

        case ACCEPT_ADDRESS_BLOCK:
            return  {
                ...state,
                isAccepted: true
            }

        case RESET_FORM:
            return {
                ...initialState.addressBlock
            }
        default: return state;
    }
}

export function checkoutFormFinalBlockReducer(
    state = initialState.finalBlock,
    action: $CheckoutFormTypes
): $CheckoutFormFinalBlock {
    switch(action.type) {
        case ACCEPT_FINAL_BLOCK:
            return {
                ...state,
                isAccepted: true
            }

        case RESET_FORM:
            return {
                ...initialState.finalBlock
            }
        default: return state
    }
}
