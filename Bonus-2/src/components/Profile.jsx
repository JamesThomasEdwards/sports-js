// React
import React from 'react';

const Profile = (props) => {
    return (
        <div className='profile-container'>
            <p>Name: {props.profileData.name}</p>
            <p>Birth year: {props.profileData.birth_year}</p>
            <p>Height: {props.profileData.height}</p>
            <p>Mass: {props.profileData.mass}</p>
        </div>
    )
}

export default Profile