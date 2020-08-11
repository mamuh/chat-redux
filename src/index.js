import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


import rootReducer from './reducers/index.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(rootReducer, composeEnhancers(applyMiddleware(logger, promiseMiddleware)))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
