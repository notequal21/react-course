import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import {BrowserRouter, Route} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <App state={state}/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
