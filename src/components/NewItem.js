"use strict";

import React from "react";
import { ControlLabel, FormControl, FormGroup, Button, Container } from 'react-bootstrap';

class NewItem extends React.Component {
    NewItemSubmit(){
        alert("We are submitting a bid woohoo, lets go through the REST database parts now!");
    }

    render(){
        return (
            <form className='container'>
                <FormGroup>
                    <ControlLabel>Item Title</ControlLabel>
                    <FormControl id='NewItemTitle' type='text'/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Starting Price</ControlLabel>
                    <FormControl id='NewItemStartingPrice' type='number'/>
                </FormGroup>
                <Button onClick={() => this.NewItemSubmit()}>Create Bid</Button>
            </form>
        );
    }
}


export { NewItem };
