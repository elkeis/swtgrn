import React, { useEffect } from 'react';
import page from 'page';

import {
    NavigationContainer
} from './NavigationContainer';

import {
    AdminPanelContainer
} from './AdminPanelContainer';
import { useSelector, useDispatch } from 'react-redux';
import { $App, $UrlState, setUrl } from '../store';
import { CheckoutFormContainer } from './checkout-form';

const ROOT = '/';
const ADMIN = '/admin';
const CHECKOUT = '/checkout';

export interface IUrlRoutingContainer {
}

export const UrlRoutingContainer:React.FC<IUrlRoutingContainer> = ({
}) => {

    const state = useSelector<$App, $UrlState>(state => state.url);
    const dispatch = useDispatch();

    useEffect(() => {
        page(ROOT, () => dispatch(setUrl(ROOT)));
        page(ADMIN, () => dispatch(setUrl(ADMIN)));
        page(CHECKOUT, () => dispatch(setUrl(CHECKOUT)));
        page();
    }, []);

    let container: any;

    switch (state.path) {
        case ROOT:
            container = <NavigationContainer></NavigationContainer>;
            break;
        case ADMIN:
            container = <AdminPanelContainer></AdminPanelContainer>;
            break;
        case CHECKOUT:
            container = <CheckoutFormContainer></CheckoutFormContainer>
            break;
    }

    return <div className="UrlRoutingContainer">
        {container}
    </div>
}
