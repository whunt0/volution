/*
 * @purpose : Reducer entry point, all reducers will imported and combined.
 * @author : Wesley Hunt
 * @version : 1.0
*/
'use strict';

import { SetTextReducer } from "./planet";

function PlanetWidgetReducer(state, action) {
    if(action.type == "@@INIT") return state;
    return {
        [state.PlanetWidget.PlanetInputs] : SetTextReducer(state.PlanetWidget.PlanetInputs, action)
    };
}
    
export { PlanetWidgetReducer };

