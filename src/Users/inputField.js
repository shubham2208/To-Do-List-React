import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Input extends Component{
    render(){
        return ( <div>
            <input type="text" value={this.state.text}/> <Button bsStyle="danger">Add</Button>
                <div id="items">
                </div>
            </div>
        );
    }
}

export default Input;