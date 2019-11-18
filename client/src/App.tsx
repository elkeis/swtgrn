import React from 'react';
import {
    NavigationContainer
} from './containers';

fetch('/api/test').then(data => {
    data.json().then(d => console.log(d));
});

const App: React.FC = () => {
    return (
        <div className="App">
            <NavigationContainer></NavigationContainer>
        </div>
    )
}

export default App;
