// React;
import React from 'react';
// Files;
import BoardContainer from './containers/BoardContainer.jsx';


const App = (props) => {
    return (
        <div className='board-container'>
            <BoardContainer startValue={0} />
        </div>
    );
};

export default App;
