/*
 * @purpose : Application  entry, setup store, run sagas
 * @author : Wesley Hunt
 * @version : 1.0
*/

"use strict";

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { AppReducer }  from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import { FETCH_DATA, FETCH_PLANET_DATA, FETCH_TRANSPORTATION_DATA } from './actions/planet';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { App } from './App';
import { DataSaga } from './containers/planet';
import { InputSaga } from './components/input';

//Get page 
document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;
    e.target.title = "X is " + x + " and Y is " + y;
};

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    AppReducer,
    //storeDefaults,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(DataSaga);
sagaMiddleware.run(InputSaga);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(FETCH_DATA());

function runSaga(saga){
    sagaMiddleware.run(saga);
}

export { store, runSaga };
