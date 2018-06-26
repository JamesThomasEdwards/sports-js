// React
import React from 'react';
// Prop types;
import PropTypes from 'prop-types';

const propTypes = {
    profileData: PropTypes.object
};

const Profile = (props) => {
    return (
        <div className='profile-container profile-text'>
            <p>Name: {props.profileData.name}</p>
            <p>Birth year: {props.profileData.birth_year}</p>
            <p>Height: {props.profileData.height}</p>
            <p>Mass: {props.profileData.mass}</p>
        </div>
    );
};

Profile.propTypes = propTypes;

export default Profile;