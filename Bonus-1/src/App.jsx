// React;
import React from 'react';
// Files;
import CounterContainer from './containers/CounterContainer.jsx';


const App = () => {
    return (
        <div className="wrap-counter-container">
            <CounterContainer startValue={0} />
        </div>
    );
};

export default App;
