import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import {counter} from './redux/reducer';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () =>{};

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools
));
    ReactDOM.render(
        (<Provider store = {store}>
            <App/>
        </Provider>),
        document.getElementById('root')
    )