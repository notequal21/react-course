import React from 'react';
import reportWebVitals from './reportWebVitals';
import state, {addPost} from "./redux/state";
import {rerenderEntireTree} from "./rerender";

rerenderEntireTree(state);

reportWebVitals();