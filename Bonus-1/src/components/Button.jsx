// React;
import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.handeler}>{props.buttonTitles[props.id]}</button>
    )
}

export default Button