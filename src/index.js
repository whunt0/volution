"use strict";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import App from './App';
import _ from "lodash";

let storeDefaults = {
    items : [],
    user : {},
    session : {}
};

let store = createStore(
    changeState, 
    storeDefaults,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

function bid(state=[], action){
    switch (action.type){
    case "ADD_ITEM":
        var newState = _.extend(state, action.item);
        return newState;
    }
}

store.dispatch({
    type : "ADD_ITEM",
    item : {
        "Title" : "Rusty Lamp",
        "bid" : 100.30
    }
});

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <NavbarHeader/>
                <Route path='/' component={App}/>
                <Route path='/NewItem' component={NewItem}/>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);



