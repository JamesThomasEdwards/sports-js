// React;
import React from 'react';
// Prop types;
import PropTypes from 'prop-types';

const propTypes = {
    handeler: PropTypes.func,
    buttonTitles: PropTypes.string
};
const Button = (props) => {
    return (
        <div className='button-container'>
            <button
                onClick={props.handeler}>
                {props.buttonTitles}
            </button>
        </div>
    );
};

Button.propTypes = propTypes;

export default Button;