import React, { useEffect } from 'react';
import { UrlRoutingContainer } from './containers';
import { useDataQuery } from './services';
import { useDispatch } from 'react-redux';

import { setFetchProductCardsAction, setProductCardsAction, setTags } from './store';

const App: React.FC = () => {

    const { loading, error, data } = useDataQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFetchProductCardsAction(loading));
        if(data) {
            dispatch(setProductCardsAction(data.products.map((p) => {
                return {
                    id: p.id,
                    addedCount: 0,
                    product: p,
                }
            })));
            dispatch(setTags(data.tags));
        }
    }, [data, loading, dispatch])

    if (loading) return <h1>загрузка...</h1>;

    if (error) return <>
        <h1>ошибка сервера, попробуйте позже</h1>
        <code>{JSON.stringify(error, undefined, '\t')}</code>
    </>;

    return (
        <div className="App">
            <UrlRoutingContainer></UrlRoutingContainer>
        </div>
    )
}

export default App;
