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


const ROOT = '/';
const ADMIN = '/admin';

export interface IUrlRoutingContainer {
}

export const UrlRoutingContainer:React.FC<IUrlRoutingContainer> = ({
}) => {

    const state = useSelector<$App, $UrlState>(state => state.url);
    const dispatch = useDispatch();

    useEffect(() => {
        page(ROOT, () => dispatch(setUrl(ROOT)));
        page(ADMIN, () => dispatch(setUrl(ADMIN)));
        page();
    }, []);

    let container: any;

    switch (state.path) {
        case ROOT:
            container = <NavigationContainer></NavigationContainer>;
            break;
        case ADMIN:
            container = <AdminPanelContainer></AdminPanelContainer>
    }

    return <div className="UrlRoutingContainer">
        {container}
    </div>
}
