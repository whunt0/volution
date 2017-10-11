"use strict";

import React from 'react';
import { Link } from 'react-router-dom';
//import Footer from './Footer'
//import AddTodo from '../containers/AddTodo'
//import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        Hello world
        <Link to={'/TestLink'}>TestLink!</Link>
    </div>
);

export default App;
