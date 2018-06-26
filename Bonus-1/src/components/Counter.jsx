// React;
import React from 'react';
// Prop types;
import PropTypes from 'prop-types';

const propTypes = {
    score: PropTypes.number
};
const Counter = (props) => {
    return (
        <div className='counter-container'>
            <p className='counter-container__p'>Counter: {props.score}</p>
        </div>
    );
};

Counter.propTypes = propTypes;

export default Counter;