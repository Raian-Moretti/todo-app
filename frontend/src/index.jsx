import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app'; 

// ONLY REQUIRED TO USE REDUX
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import reducers from './main/reducers'; 

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()    // To use plugin Redux DevTools

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools);  // Argument 'devTools' only required to use plugin Redux DevTools
// ONLY REQUIRED TO USE REDUX

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider> // PROVIDER ONLY REQUIRED TO USE REDUX

, document.getElementById('app'));