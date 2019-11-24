import React from 'react';
import {
    CheckoutForm,
    CheckoutInfoBlock,
    CheckoutAddressBlock,
    CheckoutDoublecheckBlock,
    IProductCard,
} from '../../components'

import { useSelector, useDispatch } from 'react-redux';
import {
    $App,
    $CheckoutForm,
    resetForm,
    $CheckoutFormFirstBlock,
    updateName,
    updatePhone,
    acceptFirstCheckoutBlock,
    updateEmail,
    $ChekcoutFormAddressBlock,
    updateDeliveryInfo,
    setSelfDelivery,
    acceptAddressBlock,
    acceptFinalCheckoutBlock,
    $CheckoutFormFinalBlock,
} from '../../store';

import { AeroButton, InputType } from '../../components/essentials';
export interface ICheckoutFormContainer {

}

interface PostData {
    name: string,
    phone: string,
    email: string,
    deliveryInfo: string,
    isSelfDelivery: boolean,
    products: Array<IProductCard>
}

async function post(data: PostData)  {
    const resp = await fetch('/api/order/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'same-origin',
        body: JSON.stringify(data)
    });
    return await resp.json();
}

export const CheckoutFormContainer:React.FC<ICheckoutFormContainer> = () => {
    const checkoutForm = useSelector<$App, $CheckoutForm>(state => state.checkoutForm);
    const checkoutInfo = useSelector<$App, $CheckoutFormFirstBlock>(state => state.checkoutForm.firstBlock);
    const checkoutAddress = useSelector<$App, $ChekcoutFormAddressBlock>(state => state.checkoutForm.addressBlock);
    const checkoutDoubleCheck = useSelector<$App, $CheckoutFormFinalBlock>(state => state.checkoutForm.finalBlock);
    const products = useSelector<$App, Array<IProductCard>>(state => state.productCards.list.filter(p => p.addedCount > 0));
    const dispatch = useDispatch();

    const acceptForm = () => {
        post({
            name: checkoutInfo.name.value,
            phone: checkoutInfo.phone.value,
            email: checkoutInfo.email.value,
            deliveryInfo: checkoutAddress.deliveryInfo.value,
            isSelfDelivery: checkoutAddress.isSelfDelivery,
            products: products
        }).then(() => dispatch(acceptFinalCheckoutBlock()));
    }

    return <>
        <CheckoutForm
            progress={[
                checkoutInfo.isAccepted,
                checkoutAddress.isAccepted,
                checkoutDoubleCheck.isAccepted
            ]}

            activeBlock={checkoutForm.checkoutBlock}

            firstBlock={
                <CheckoutInfoBlock
                    inputs={[
                        {
                            ...checkoutInfo.name,
                            type: InputType.TEXT,
                            byUpdate: name => dispatch(updateName(name))
                        },
                        {
                            ...checkoutInfo.phone,
                            type: InputType.PHONE,
                            byUpdate: phone => dispatch(updatePhone(phone))
                        },
                        {
                            ...checkoutInfo.email,
                            type: InputType.EMAIL,
                            byUpdate: email => dispatch(updateEmail(email))
                        }
                    ]}

                    byAccept={() => dispatch(acceptFirstCheckoutBlock())}
                ></CheckoutInfoBlock>
            }

            secondBlock={
                <CheckoutAddressBlock
                    address={{
                        ...checkoutAddress.deliveryInfo,
                        byChange: value => dispatch(updateDeliveryInfo(value)),
                        isDisabled: checkoutAddress.isSelfDelivery,
                        placeholder:
`Информация для доставки:
Адрес: улица, дом, подъезд, этаж.
Желаемое время`
                    }}
                    selfDelivery={{
                        isOn: checkoutAddress.isSelfDelivery,
                        byClick: toggleTo => dispatch(setSelfDelivery(toggleTo))
                    }}
                    isValid={checkoutAddress.isValid}
                    byAccept={() => dispatch(acceptAddressBlock())}
                ></CheckoutAddressBlock>
            }

            thirdBlock={
                <CheckoutDoublecheckBlock
                    products={products}
                    name={checkoutInfo.name.value}
                    phone={checkoutInfo.phone.value}
                    email={checkoutInfo.email.value}
                    address={checkoutAddress.deliveryInfo.value}
                    isSelfDelivery={checkoutAddress.isSelfDelivery}
                    byAccept={() => acceptForm()}
                >
                </CheckoutDoublecheckBlock>
            }

            fourthBlock={
                <>
                    Спасибо за заказ
                    <AeroButton
                        byClick={() => dispatch(resetForm())}
                    >
                        <i className="checkmark"></i>
                    </AeroButton>
                </>
            }
        ></CheckoutForm>
    </>
}
