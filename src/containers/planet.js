/*
 * @purpose : Planet container used to wrap inputs and outputs.
 * Takes care of input/ouput logic
 * @author : Wesley Hunt
 * @version : 1.0
*/

"use strict";

import React from 'react';
import CO from "co";
import PropTypes from 'prop-types';
import styles from '../styles/planet.styl';
import _ from 'lodash';

import { connect } from 'react-redux';
import { runSaga, store} from '../index.js';
import { put, takeEvery } from 'redux-saga/effects';
import { get } from '../utils/REST';
import { ConnectedPlanetInput, ConnectedTransportationInput } from '../components/input';
import { SET_PLANET_DATA } from '../actions/planet';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class PlanetContainer extends React.Component{
    constructor(props){
        super(props);
        //Keep selected planets inside the planet container, doesn't need to persist in the store.
        this.state = {};
        this.state.SelectedPlanets = [];
        this.state.SelectedTransportation = "";
    }

    render(){
        let PlanetWidget = this.props.PlanetWidget;
        let leftInput = capitalizeFirstLetter(PlanetWidget.PlanetInputs.leftInput.toLowerCase());
        let rightInput = capitalizeFirstLetter(PlanetWidget.PlanetInputs.rightInput.toLowerCase());
        let TravelTime = "--";
        let Hours = "--";
        let Days = "--";
        let Years = "--";

        if(PlanetWidget.SelectedTransport != "" && rightInput in PlanetWidget.PlanetData && leftInput in PlanetWidget.PlanetData){
            TravelTime = Math.abs(
                PlanetWidget.PlanetData[leftInput].DistanceFromSun.val - 
                PlanetWidget.PlanetData[rightInput].DistanceFromSun.val);
            TravelTime = TravelTime / PlanetWidget.TransportationData[PlanetWidget.SelectedTransport].speed;
            Hours = Math.floor(TravelTime);
            Days = Math.floor(TravelTime / 24);
            Years = Math.floor(Days / 365);
        }

        return (
            <div className={'layout'} style={{width:'800px'}}>
                {this.props.children}
            </div>
        );
    }
}


PlanetContainer.propTypes = {
    children : PropTypes.node,
    PlanetWidget : PropTypes.object
};


function* DataSaga(){
    yield takeEvery("FETCH_DATA", FetchData) ;
}

function* FetchData(){
    //let url = 'http://localhost:3000/';
    let url = 'https://wt-2f57da0cad2e07a31bf654e42422bb7c-0.run.webtask.io/express/';

    try{
        let ssData = yield get(url + 'solarsystem', {}, true);
        let tData = yield get(url + 'transportation', {}, true);
        yield put({type : "SET_PLANET_DATA", data : ssData});
        yield put({type : "SET_TRANSPORTATION_DATA", data : tData});
    } catch (err){
        console.log("rest request failed");
    }

}

const mapStateToProps = (state, props) => {
    return { 
        "PlanetWidget" : state.PlanetWidget,
    };

};

const ConnectedPlanetContainer = connect(mapStateToProps)(PlanetContainer);

export { ConnectedPlanetContainer, DataSaga };
