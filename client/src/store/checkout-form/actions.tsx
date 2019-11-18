import {
    ACCEPT_FIRST_CHECKOUT_BLOCK,
    UPDATE_NAME,
    $AcceptFirstCheckoutBlock,
    $UpdateName,
    $UpdatePhone,
    UPDATE_PHONE,
    UPDATE_EMAIL,
    $UpdateEmail,
    $UpdateDeliveryInfo,
    UPDATE_DELIVERY_INFO,
    $SetSelfDelivery,
    SET_SELF_DELIVERY,
    $AcceptAddressBlock,
    ACCEPT_ADDRESS_BLOCK,
    $AcceptFinalBlock,
    ACCEPT_FINAL_BLOCK,
    $ResetForm,
    RESET_FORM,
} from "./types";

export function acceptFirstCheckoutBlock(): $AcceptFirstCheckoutBlock {
    return {
        type: ACCEPT_FIRST_CHECKOUT_BLOCK
    }
}

export function acceptAddressBlock(): $AcceptAddressBlock {
    return {
        type: ACCEPT_ADDRESS_BLOCK
    }
}

export function updateName(name: string): $UpdateName {
    return {
        type: UPDATE_NAME,
        value: name
    }
}

export function updatePhone(phone: string): $UpdatePhone {
    return {
        type: UPDATE_PHONE,
        value: phone
    }
}

export function updateEmail(email: string): $UpdateEmail {
    return {
        type: UPDATE_EMAIL,
        value: email
    }
}

export function updateDeliveryInfo(deliveryInfo: string): $UpdateDeliveryInfo {
    return {
        type: UPDATE_DELIVERY_INFO,
        value: deliveryInfo
    }
}

export function setSelfDelivery(selfDelivery : boolean): $SetSelfDelivery {
    return {
        type: SET_SELF_DELIVERY,
        value: selfDelivery
    }
}

export function acceptFinalCheckoutBlock(): $AcceptFinalBlock {
    return {
        type: ACCEPT_FINAL_BLOCK,
    }
}

export function resetForm(): $ResetForm {
    return {
        type: RESET_FORM
    }
}
