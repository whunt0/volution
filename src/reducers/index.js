/*
 * @purpose : Reducer entry point, all reducers will be imported and combined here.
 * @author : Wesley Hunt
 * @version : 1.0
*/
'use strict';

import { combineReducers } from "redux";
import { SetTextReducer } from "./planet";
import { PlanetClicker, PlanetInputs, SelectedTransport, PlanetData, TransportationData } from "./planet";

const PlanetWidget = combineReducers({PlanetClicker, PlanetInputs, SelectedTransport, PlanetData, TransportationData});
const AppReducer = combineReducers({PlanetWidget});

export { AppReducer };
