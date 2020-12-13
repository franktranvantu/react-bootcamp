import React from 'react';
import Card from './Card';
import CardClass from './CardClass';

function App(props) {
    return (
        <React.Fragment>
            <Card cardColor='red' height={200} width={400} />
            <Card />
            <Card cardColor='green' />
        </React.Fragment>
    );
}

export default App;