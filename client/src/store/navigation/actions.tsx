import {
    HeaderTumbler
} from "../../components";

import {
    $NavigationActionTypes,
    SET_ACTIVE_TUMBLER,
    SET_SHOW_TUMBLERS,
    $SetShowCheckoutForm,
    SET_SHOW_CHECKOUT_FORM,
    $SetCatalogActiveView,
    SET_CATALOG_ACTIVE_VIEW,
    CatalogView
} from "./types";



export function setActiveTumbler (tumbler: HeaderTumbler) : $NavigationActionTypes {
    return {
        type: SET_ACTIVE_TUMBLER,
        value: tumbler
    }
}

export function setShowTumblers(showTumblers: boolean) : $NavigationActionTypes {
    return {
        type: SET_SHOW_TUMBLERS,
        value: showTumblers
    }
}

export function setShowCheckoutForm(showCheckoutForm: boolean): $SetShowCheckoutForm {
    return {
        type: SET_SHOW_CHECKOUT_FORM,
        value: showCheckoutForm
    }
}

export function setCatalogActiveView(activeView: CatalogView): $SetCatalogActiveView {
    return {
        type: SET_CATALOG_ACTIVE_VIEW,
        value: activeView
    }
}
