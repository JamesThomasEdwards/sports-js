// React;
import React from 'react';
// Prop types;
import PropTypes from 'prop-types';

const propTypes = {
    profileData: PropTypes.object
};

const StarWarsCharacters = (props) => {
    return (
        <div className="character-container character-text">
            <p>Name: {props.profileData.name}</p>
            <p>Birth year: {props.profileData.birth_year}</p>
            <p>Height: {props.profileData.height}</p>
            <p>Mass: {props.profileData.mass}</p>
        </div>
    );
};

StarWarsCharacters.propTypes = propTypes;

export default StarWarsCharacters;