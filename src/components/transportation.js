/*
 * @purpose : Transportation Input Component keeps track of the selected mode of transportation
 * @author : Wesley Hunt
 * @version : 1.0
*/

"use strict";

import React from 'react';
import CO from 'co';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { SET_TRANSPORT } from '../actions/planet';
import styles from '../styles/planet.styl';

class TransportationInput extends React.Component {
    handleChange(transportName){
        if(transportName == this.props.SelectedTransport){
            transportName = "";
        }
        this.props.selectTransportation(transportName);
        console.log("Handling input change");
    }
    render(){
        let TransportationDivs = [];
        let tKeys = _.keys(this.props.TransportationData);


        for(let i = 0; i < tKeys.length; ++i){
            let isSelected = this.props.SelectedTransport == tKeys[i] ? "transportSelected" : "";

            TransportationDivs.push(<div className={styles[isSelected]}onClick={(e)=> this.handleChange(tKeys[i])}>
                <div>
                    <img src={this.props.TransportationData[tKeys[i]].src}/>
                </div>
                <div>
                    {tKeys[i]}
                </div>
                <div>
                    {this.props.TransportationData[tKeys[i]].speed} km/h
                </div>
            </div>);
        }

        return ( 
            <div className={styles.transportationWrapper}>
                {TransportationDivs}
            </div>
        );
    }
}

TransportationInput.propTypes = {
    selectTransportation : PropTypes.func,
    SelectedTransport : PropTypes.string,
    TransportationData : PropTypes.object,
    name : PropTypes.string,
    src : PropTypes.string,
    speed : PropTypes.string
};


const mapStateToProps = (state, props) => {
    return { 
        "SelectedTransport" : state.PlanetWidget.SelectedTransport,
        "TransportationData" : state.PlanetWidget.TransportationData
    };

};

const mapDispatchToProps = (dispatch, props) => {
    return {
        "selectTransportation" : (transportation) => dispatch(SET_TRANSPORT(transportation))
    };
};

const ConnectedTransportationInput = connect(mapStateToProps, mapDispatchToProps)(TransportationInput);

export { ConnectedTransportationInput};
