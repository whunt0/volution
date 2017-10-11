"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import App from './App';
import { PlanetWidgetReducer }  from './reducers/planet';
import { combinedWidgetReducer }  from './reducers/planet';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//function setInput(previousState, action){
//    if(action.type == "setInputText")
//        return Object.assign(previousState, action.text);
//    return previousState;
//}

let storeDefaults = {
    PlanetWidget : {
        PlanetInputs : {},
        SelectedTransport : null,
        //Data : {
        //    Planet : {},
        //    Transport : {}
        //}
    }
};


let store = createStore(
    //PlanetWidgetReducer, 
    combinedWidgetReducer,
    storeDefaults,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    document.getElementById('root')
);


export { store };
