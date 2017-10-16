/*
 * @purpose : Planet Input Components handle inputs by typing into the input fields.
 * These values are ovewritten by clicking on a planet in the solar system image.
 * @author : Wesley Hunt
 * @version : 1.0
*/
"use strict";

import React from 'react';
import CO from 'co';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { get } from '../utils/REST';
import { put, takeEvery } from 'redux-saga/effects';
import { connect } from 'react-redux';
import { store } from '../index';
import { SET_INPUT_TEXT, SET_TRANSPORTATION } from '../actions/planet';
import { Error } from '../utils/error';


class PlanetInput extends React.Component {
    constructor(props){
        super(props);
        this.planetNames = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

    }

    handleChange(e){
        this.props.setInputText(this.props.inputName, e.target.value);
    }

    render(){
        let valid = true;
        let ErrorComponent = <div/>;
        let inputText = this.props.PlanetInputs[this.props.inputName];
        inputText = _.isUndefined(inputText) ? "" : inputText;

        if(inputText.length != 0 && _.indexOf(this.planetNames, inputText.toLowerCase()) == -1){
            valid = false;
            ErrorComponent = <Error message='Invalid planet name.'/>;
        }

        return ( 
            <div>
                <input valid={valid} type='text' value={this.props.PlanetInputs[this.props.inputName]} name={this.props.inputName} onChange={ (e) => this.handleChange(e) }/>
                { ErrorComponent }
            </div>
        );
    }
}

PlanetInput.propTypes = {
    PlanetInputs : PropTypes.object,
    inputName : PropTypes.string,
    test : PropTypes.func,
    setInputText : PropTypes.func
};

var modSelect = 1;

function* InputSaga(){
    yield takeEvery("SET_SELECTED_PLANETS", SetInputsOnSelect) ;
}

function* SetInputsOnSelect(action){
    try{
        yield put({type : "SET_INPUT_TEXT", inputName : "leftInput", text : _.isUndefined(action.selectedPlanets[0]) ? "" : action.selectedPlanets[0]});
        yield put({type : "SET_INPUT_TEXT", inputName : "rightInput", text : _.isUndefined(action.selectedPlanets[1]) ? "" : action.selectedPlanets[1]});
        modSelect = (modSelect + 1) % 2;

    } catch (err){
        console.log("rest request failed");
    }
}


const mapStateToProps = (state, props) => {
    return { 
        "PlanetInputs" : state.PlanetWidget.PlanetInputs,
    };

};

const mapDispatchToProps = (dispatch, props) => {
    return {
        "setInputText" : (inputName, text) => dispatch(SET_INPUT_TEXT(inputName, text))
    };
};

const ConnectedPlanetInput = connect(mapStateToProps, mapDispatchToProps)(PlanetInput);

export { InputSaga, ConnectedPlanetInput};
