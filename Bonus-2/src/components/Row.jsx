// React
import React from 'react';
// Files
import Profile from './Profile.jsx'

const Row = (props) => {
    let profileSet = [];
    for (let i = props.id; i < props.id + 3; i++) {
        if (i < props.allProfiles.length) {
            profileSet.push(<Profile
                key={'profile' + i}
                profileData={props.allProfiles[i]} />)
        }

    }
    return (
        <div className='row-container'>
            {profileSet}
        </div>
    )
}

export default Row