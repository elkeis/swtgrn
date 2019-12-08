import React from 'react';

import {
    Layout,
    Header,
    HeaderTumbler,
    SidePane,
    SidePaneDirection,
    Tags,
    Contacts,
    Events
} from '../components';

import  {
    $App,
    $ProductCards,
    CatalogView,
    $Tags,
    updateSelectionAction,
    $Contacts,
    $Events,
} from '../store';

import {
    useSelector,
    useDispatch
} from 'react-redux';

import {
    $Navigation,
    setActiveTumbler,
    setShowTumblers,
    setCatalogActiveView,
} from '../store/navigation';

import {
    ProductCardsContainer,
    ShoppingCartContainer
} from './';

import { CheckoutFormContainer } from './checkout-form';
import { useFilteredProducts } from './selectors';

const tumblerViewMap = {
    [HeaderTumbler.CART] : CatalogView.CART,
    [HeaderTumbler.TAGS] : CatalogView.TAGS,
    [HeaderTumbler.EVENTS] : CatalogView.EVENTS,
    [HeaderTumbler.CONTACTS] : CatalogView.CONTACTS,
    [HeaderTumbler.DEFAULT] : CatalogView.CATALOG,
}

export const NavigationContainer:React.FC = () => {

    const navigation = useSelector<$App, $Navigation>(state => state.navigation);
    const productCards = useSelector<$App, $ProductCards>(state => state.productCards);
    const tags = useSelector<$App, $Tags>(state => state.tags);
    const contacts = useSelector<$App, $Contacts>(state => state.contacts);
    const events = useSelector<$App, $Events>(state => state.events);
    const dispatch = useDispatch();

    return <>
        <Layout
                header={
                    <div className="header-container">
                        <Header
                            shoppingCartItemsCount={productCards.list.map(c => c.addedCount).reduce((sum, v) => sum + v, 0)}
                            selectedTagsCount={tags.selected.length}
                            showTumblers={navigation.header.showTumblers}
                            byToggle={tumbler => dispatch(setCatalogActiveView(tumblerViewMap[tumbler]))}
                            activeTumbler={navigation.header.activeTumbler}
                            eventsCount={events.list.length}
                        ></Header>
                    </div>
                }

                catalog={
                    <>
                        <SidePane
                            isOpen={ navigation.catalog.activeView === CatalogView.CART }
                            direction={ SidePaneDirection.LTR }
                        >
                            <ShoppingCartContainer
                                isSideView={true}
                            ></ShoppingCartContainer>
                        </SidePane>

                        <SidePane
                            isOpen={ navigation.catalog.activeView === CatalogView.TAGS }
                            direction={ SidePaneDirection.LTR }
                        >
                            <Tags
                                {...tags}
                                productsCount={useFilteredProducts().length}
                                byUpdateSelection={tags => dispatch(updateSelectionAction(tags))}
                                byClickOnMessage={() => dispatch(setCatalogActiveView(CatalogView.CATALOG))}
                            ></Tags>
                        </SidePane>
                        <ProductCardsContainer></ProductCardsContainer>
                        <SidePane
                            isOpen={ navigation.catalog.activeView === CatalogView.CONTACTS}
                            direction={ SidePaneDirection.RTL }
                        >
                            <Contacts
                                {...contacts}
                            ></Contacts>
                        </SidePane>

                        <SidePane
                            isOpen={ navigation.catalog.activeView === CatalogView.EVENTS}
                            direction={ SidePaneDirection.RTL }
                        >
                            <>
                                <Events events={events.list}></Events>
                            </>
                        </SidePane>
                    </>
                }

                byScrollToTop={() => {
                    dispatch(setShowTumblers(false));
                    dispatch(setActiveTumbler(HeaderTumbler.DEFAULT))
                }}

                byScrollToCatalog={() => dispatch(setShowTumblers(true))}

                startingScreen={
                    <i className="logo"></i>
                }

                checkoutForm={
                    <CheckoutFormContainer></CheckoutFormContainer>
                }

                shoppingCart={
                    <ShoppingCartContainer></ShoppingCartContainer>
                }
            >
        </Layout>
    </>
}
