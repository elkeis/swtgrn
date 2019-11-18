import { HeaderTumbler } from "../../components";

export const SET_SHOW_TUMBLERS = 'SET_SHOW_TUMBLERS';
export const SET_ACTIVE_TUMBLER = 'SET_ACTIVE_TUMBLER';
export const SET_SHOW_CHECKOUT_FORM = 'SET_SHOW_CHECKOUT_FORM';
export const SET_CATALOG_ACTIVE_VIEW = 'SET_CATALOG_ACTIVE_VIEW';

export enum CatalogView {
    CART = 'CART',
    TAGS = 'TAGS',
    EVENTS = 'EVENTS',
    CONTACTS = 'CONTACTS',
    CATALOG = 'CATALOG',
}

export interface $SetShowTumblers {
    type: typeof SET_SHOW_TUMBLERS,
    value: boolean
}

export interface $SetActiveTumber {
    type: typeof SET_ACTIVE_TUMBLER,
    value: HeaderTumbler
}

export interface $SetShowCheckoutForm {
    type: typeof SET_SHOW_CHECKOUT_FORM,
    value: boolean,
}

export interface $SetCatalogActiveView {
    type: typeof SET_CATALOG_ACTIVE_VIEW,
    value: CatalogView
}

export type $NavigationActionTypes =
    $SetShowTumblers
    | $SetActiveTumber
    | $SetShowCheckoutForm
    | $SetCatalogActiveView;

export interface $Catalog {
    activeView: CatalogView,

}

export interface $Page {
    disableScroll: boolean,
}

export interface $Header {
    showTumblers: boolean,
    activeTumbler: HeaderTumbler
}

export interface $Navigation {
    catalog: $Catalog
    header: $Header,
    page: $Page
}
