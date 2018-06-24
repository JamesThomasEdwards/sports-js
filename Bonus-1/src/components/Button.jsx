// React;
import React from 'react';

const Button = (props) => {
    return (
        <button
            onClick={props.handeler}>
            {props.buttonTitles}
        </button>
    )
}

export default Button