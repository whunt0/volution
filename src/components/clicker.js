/*
 * @purpose : Planet Clicker Component handles user clicks on the solar system image
 * @author : Wesley Hunt
 * @version : 1.0
*/
"use strict";

import React from 'react';
import CO from 'co';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from '../styles/planet.styl';

import { connect } from 'react-redux';
import { SET_SELECTED_PLANETS } from '../actions/planet';

class PlanetClicker extends React.Component{

    setPlanetInput(planetName){
        //let selectedArray = [...this.state.SelectedPlanets];
        let selectedArray = [...this.props.SelectedPlanets];
        if(_.indexOf(this.props.SelectedPlanets, planetName) == -1){
            selectedArray.unshift(planetName);
            if(selectedArray.length > 2){
                selectedArray.pop();
            }
        }else{
            selectedArray.splice(_.indexOf(this.props.SelectedPlanets, planetName), 1);
        }
        return this.props.setSelectedPlanets(selectedArray);
    }

    render(){
        let planetNames = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

        let PlanetDivs = [];
        for(let i = 0; i<planetNames.length; ++i){
            let isSelected = _.indexOf(this.props.SelectedPlanets, planetNames[i]) != -1 ? "selected" : "";
            PlanetDivs.push(<div className={[styles.planet, styles[planetNames[i]], styles[isSelected]].join(" ")} onClick={() => this.setPlanetInput(planetNames[i])}/>);
        }


        return (
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Planets2013.svg/800px-Planets2013.svg.png'/>
                {PlanetDivs}
            </div>
        );
    }
}

PlanetClicker.propTypes = {
    setSelectedPlanets : PropTypes.func,
    SelectedPlanets : PropTypes.array
};

const mapStateToProps = (state, props) => {
    return { 
        "SelectedPlanets" : state.PlanetWidget.PlanetClicker
    };

};

const mapDispatchToProps = (dispatch, props) => {
    return {
        "setSelectedPlanets" : (clickArray) => dispatch(SET_SELECTED_PLANETS(clickArray))
    };
};

let ConnectedPlanetClicker = connect(mapStateToProps, mapDispatchToProps)(PlanetClicker);

export { ConnectedPlanetClicker };

