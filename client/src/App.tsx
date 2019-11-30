import React, { useEffect } from 'react';
import {
    NavigationContainer, UrlRoutingContainer
} from './containers';
import { useDataQuery } from './services';
import { useDispatch } from 'react-redux';
import { setFetchProductCardsAction, setProductCardsAction, setTags } from './store';

fetch('/api/heartbeat').then(data => {
    data.json().then(status => {
        if (status.isAlive) {
            console.log(`server is alive`);
        }
    }).catch(e => {throw new Error(`can't get json data`)});
}).catch(e => {throw new Error('server is not avaliable')});

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

    console.log(data);
    if (loading) return <h1>загрузка...</h1>;
    if (error) return <>
        <h1>ошибка сервера, попробуйте позже</h1>
        <code>{JSON.stringify(error, undefined, '\t')}</code>
    </>

    return (
        <div className="App">
            {/* <NavigationContainer></NavigationContainer> */}
            <UrlRoutingContainer></UrlRoutingContainer>
        </div>
    )
}

export default App;
