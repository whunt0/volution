/*
 * @purpose : Simple error component that displayed passed messages.
 * @author : Wesley Hunt
 * @version : 1.0
*/
'use strict';

import React from "react";
import PropTypes from 'prop-types';

class Error extends React.Component{
    render(){
        return(
            <div>
                <div>
                    {this.props.message}
                </div>
            </div>
        );
    }
}

Error.propTypes = {
    message : PropTypes.string
};


export { Error };
