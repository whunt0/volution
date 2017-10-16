/*
 * @purpose : Planet reducers which fetch server data, handle planet selection, and handle transportation selection. 
 * @author : Wesley Hunt
 * @version : 1.0
*/
'use strict';

import { combineReducers } from 'redux';

function PlanetClicker(state = [], action){
    switch(action.type){
    case "SET_SELECTED_PLANETS":
        return action.selectedPlanets;
    default :
        return state;
    }
}

function PlanetInputs(state = {"leftInput" : '', "rightInput" : ''}, action){
    switch(action.type){
    case "SET_INPUT_TEXT":
        return Object.assign({}, state, { [action.inputName] : action.text });
    default :
        return state;
    }
}

function SelectedTransport(state = '', action){
    switch(action.type){
    case "SET_TRANSPORT":
        return action.transport;
    default :
        return state;
    }
}

function PlanetData(state = {}, action){
    switch(action.type){
    case "SET_PLANET_DATA":
        return Object.assign({}, state, action.data);
    default :
        return state;
    }
}


function TransportationData(state = {}, action){
    switch(action.type){
    case "SET_TRANSPORTATION_DATA":
        return Object.assign({}, state, action.data);
    default :
        return state;
    }
}

export { PlanetClicker, PlanetInputs, SelectedTransport, PlanetData, TransportationData };

