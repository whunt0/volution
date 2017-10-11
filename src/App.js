"use strict";

import React from 'react';
import { ItemList, ConnectedPlanetInput } from './components/input';

const App = () => (
    <div>
        Left Input
        <ConnectedPlanetInput inputName='LeftInput'/>
        Right Input
        <ConnectedPlanetInput inputName='RightInput'/>
    </div>
);

export default App;
