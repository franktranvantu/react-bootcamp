import React from 'react';
import Card from './Card';

function App(props) {
    return (
        <React.Fragment>
            <Card cardColor='red' height={200} width={400} />
            <Card cardColor='blue' />
            <Card cardColor='blue' />
        </React.Fragment>
    );
}

export default App;