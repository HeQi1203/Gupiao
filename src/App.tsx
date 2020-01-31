import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import RouterView from './router/routerView';
import routes from './router/routerconfig';
import store from './store/index';
import './App.css';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <RouterView routes={routes} />
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
