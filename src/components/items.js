"use strict";

import React from 'react';
import itemStyle from './styles/item.css';

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
                <div className={itemStyle.myText} onClick={() => this.RESTTest()}>Test The Rest</div>
            </div>
        );
    }
}

export { ItemList }
