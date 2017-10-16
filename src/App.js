/*
 * @purpose : Main application, all components are wrapped in a ConnectedPlanetContainer.
 * ConnectedPlanetContainer handles logic
 * @author : Wesley Hunt
 * @version : 1.0
*/

"use strict";

import React from 'react';
import css from './styles/global.css';
import style from './styles/planet.styl';
import { ConnectedPlanetClicker } from './components/clicker';
import { ConnectedPlanetInput } from './components/input';
import { ConnectedPlanetOutput } from './components/output';
import { ConnectedTransportationInput } from './components/transportation';
import { ConnectedPlanetContainer } from './containers/planet';

const App = () => (
    <div>
        <ConnectedPlanetContainer>
            <div>
                <ConnectedPlanetClicker/>
            </div>
            <div className={style["controlContainer"]}>
                <div>
                    <ConnectedTransportationInput/>
                </div>
                <div className={style["ioMargin"]}>
                    <ConnectedPlanetInput inputName='leftInput'/>
                    <ConnectedPlanetInput inputName='rightInput'/>
                </div>
                <div className={style["ioMargin"]}>
                    <ConnectedPlanetOutput/>
                </div>
            </div>
        </ConnectedPlanetContainer>
    </div>
);

export { App };
