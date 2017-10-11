/*
 * @purpose : Planet reducers which keep track of input and vehicle selection
 * @author : Wesley Hunt
 * @version : 1.0
*/
'use strict';

import { combineReducers } from 'redux';

function PlanetInputs(state = {}, action){
    //if(typeof state == "undefined") return state;
    switch(action.type){
    case "SET_INPUT_TEXT":
        //let newState = Object.assign({}, state, { action.inputName : action.text });
        //newState[action.inputName] = action.text;
        return Object.assign({}, state, { [action.inputName] : action.text });
    default :
        return state;
    }
}

function SelectedTransport(state = {}, action){
    //if(typeof state == "undefined") return state;
    switch(action.type){
    case "SELECT_TRANSPORT":
        //let newState = Object.assign({}, state, { action.inputName : action.text });
        //newState[action.inputName] = action.text;
        return Object.assign({}, state, { SelectedTransport : action.transport });
    default :
        return state;
    }
}


const PlanetWidget = combineReducers({PlanetInputs, SelectedTransport});
//const combinedWidgetReducer = combineReducers({"PlanetWidget" : combinedInputsReducer});
const combinedWidgetReducer = combineReducers({PlanetWidget});

function PlanetWidgeReducer(state = {}, action){
    return state;
}

export { PlanetInputs, combinedWidgetReducer };

//let storeDefaults = {
//    PlanetWidget : {
//        PlanetInputs : {},
//        SelectedTransport : null,
//        Data : {
//            Planet : {},
//            Transport : {}
//        }
//    }
//};

