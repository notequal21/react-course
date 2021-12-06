import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App state={store} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();