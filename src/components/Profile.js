import React from 'react';
import Navbar from './Navbar';

const Profile = props => {

    return (
        <>
            <Navbar />
            <div className='profile__main-container'>
                <div className='profile__header-container'>
                    <div className='profile__header-image'></div>
                    <div className='profile__header-inner'>
                        <div>UserName</div>
                        <div>Logout Button</div>
                        <div>Name</div>
                    </div>
                </div>
                <div className='profile__posts-container'>
                    <div className='profile__posts-images'> posted images</div>
                </div>
            </div>
        </>
    )
}

export default Profile;