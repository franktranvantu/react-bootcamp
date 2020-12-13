import React from 'react';
import Grandchild from './Grandchild';

function Child(props) {
    return (
        <React.Fragment>
            <h1>I'm the Child component</h1>
            <Grandchild />
        </React.Fragment>
    );
}

export default Child;