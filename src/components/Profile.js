import React from 'react';
import Navbar from './Navbar';
import ProfileInfo from './ProfileInfo';

const Profile = props => {

    return (
        <>
            <Navbar />
            <ProfileInfo />
            <div className='profile__posts--container'>
                <div className='profile__posts-images'> posted images</div>
            </div>
        </>
    )
}

export default Profile;