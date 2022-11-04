import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from "react-router-dom"
import Main from './components/Main';
import store from './reducers';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>

            <HashRouter>
            <Provider store={store}>
                <Main />
            </Provider>
            </HashRouter>

    </>
);
