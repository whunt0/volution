/*
 * @purpose : Actions for setting inputs and fetching seed data
 * @author : Wesley Hunt
 * @version : 1.0
*/

"use strict";


function SET_INPUT_TEXT(inputName, text){
    return {
        type : "SET_INPUT_TEXT",
        inputName : inputName,
        text : text
    };
}

function SET_TRANSPORT(transport){
    return {
        type : "SET_TRANSPORT",
        transport : transport
    };
}

function SET_SELECTED_PLANETS(selectedPlanets){
    return {
        type : "SET_SELECTED_PLANETS",
        selectedPlanets : selectedPlanets 
    };
}

function FETCH_DATA(){
    return {
        type : "FETCH_DATA",
    };
}

function SET_PLANET_DATA(data){
    return {
        type : "SET_PLANET_DATA",
        data : data 
    };
}

function SET_TRANSPORTATION_DATA(data){
    return {
        type : "SET_TRANSPORTATION_DATA",
        data : data 
    };
}

export { 
    SET_INPUT_TEXT, 
    SET_TRANSPORT, 
    SET_SELECTED_PLANETS,
    FETCH_DATA,
    SET_PLANET_DATA, 
    SET_TRANSPORTATION_DATA
};
