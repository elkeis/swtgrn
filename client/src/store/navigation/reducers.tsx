import {
    $Navigation,
    $NavigationActionTypes,
    SET_SHOW_TUMBLERS,
    SET_CATALOG_ACTIVE_VIEW,
    $Catalog,
    $Header,
    CatalogView,
    $Page
} from "./types";

import { HeaderTumbler } from "../../components";


const initialState: $Navigation = {
    catalog: {
        activeView: CatalogView.CATALOG
    },

    header: {
        showTumblers: false,
        activeTumbler: HeaderTumbler.DEFAULT
    },
    page: {
        disableScroll: false,
    }
}

export function catalogReducer(
    state = initialState.catalog,
    action: $NavigationActionTypes
): $Catalog {
    switch(action.type) {
        case SET_CATALOG_ACTIVE_VIEW:
            return {
                ...state,
                activeView: action.value
            }
        default : return state
    }
}

const viewTumblerMap = {
    [CatalogView.CART]: HeaderTumbler.CART,
    [CatalogView.TAGS]: HeaderTumbler.TAGS,
    [CatalogView.EVENTS]: HeaderTumbler.EVENTS,
    [CatalogView.CONTACTS]: HeaderTumbler.CONTACTS,
    [CatalogView.CATALOG]: HeaderTumbler.DEFAULT,
}

export function headerReducer(
    state = initialState.header,
    action: $NavigationActionTypes
): $Header {
    switch(action.type) {
        case SET_CATALOG_ACTIVE_VIEW:
            return {
                ...state,
                activeTumbler: viewTumblerMap[action.value]
            }

        case SET_SHOW_TUMBLERS:
            return {
                ...state,
                showTumblers: action.value
            }
        default: return state
    }

}

export function pageReducer(
    state = initialState.page,
    action: $NavigationActionTypes
): $Page {
    switch(action.type) {
        default: return state;
    }
}
