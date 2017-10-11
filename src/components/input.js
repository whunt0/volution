"use strict";

import React from 'react';
import itemStyle from '../styles/item.css';
import CO from 'co';
import { get } from '../utils/REST';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { store } from '../index';

//store.getState();

class ItemList extends React.Component {
    RESTTest(){
        console.log("Do we recompile?");
        CO(function*(){
            var ret = yield get('/REST/items');
            console.log(ret);

        });
    }

    render(){
        return ( 
            <div>
                {this.props.inputName}<input type='text' name={this.props.inputName}></input>
                <div className={itemStyle.myText} onClick={() => this.RESTTest()}>Test The Rest</div>
            </div>
        );
    }
}

ItemList.propTypes = {
    inputName : PropTypes.string
};

class PlanetInput extends React.Component {
    //constructor(props){
    //    super(props);
    //    this.state = {text : ''};
    //}
    handleChange(e){
        //this.setState({text : event.target.value});
        this.props.testme(this.props.inputName, e.target.value);
        console.log("Handling input change");
    }
    render(){
        return ( 
            <div>
                <input type='text' name={this.props.inputName} onChange={ (e) => this.handleChange(e) }/>
            </div>
        );
    }
}

PlanetInput.propTypes = {
    inputName : PropTypes.string,
    test : PropTypes.func,
    testme : PropTypes.func
};

function SetText(inputName, text){
    return {
        type : "SET_INPUT_TEXT",
        inputName : inputName,
        text : text
    };
}


const mapStateToProps = (state, props) => {
    //return state;
    //let newState = Object.assign({}, state);
    //newState.PlanetInputs[props.inputName] = {text = props.text;
    return { "PlanetInputs" : state.PlanetWidget.PlanetInputs };

};

const mapDispatchToProp = (dispatch, props) => {
    return {
        "test" : (text) => dispatch({"type" : "TEST_DISPATCH"}),
        "testme" : (inputName, text) => dispatch(SetText(inputName, text))
    };
};

const ConnectedPlanetInput = connect(mapStateToProps, mapDispatchToProp)(PlanetInput);

export { ItemList, ConnectedPlanetInput};
