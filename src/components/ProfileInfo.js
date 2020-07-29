import React, { useState } from "react";
import { connect } from "react-redux";
import { GrLogout } from "react-icons/gr"


const ProfileInfo = props => {


    return (
        <>
            <div className="profile__info--outer">
                <div className="profile__main--contianer">
                    <img className="profile_img" src={require("../assets/mickey.jpg")} />
                </div>
                <div className="profile__info">
                    <div className="profile__header">
                        <div className="profile__username">Mickey.Mouse</div>
                        <button className="profile__edit">Edit Profile</button>
                        <GrLogout className="profile__logout" />
                    </div>
                    <div className="profile__details">
                        <div className="profile__mid profile__posts">1 posts</div>
                        <div className="profile__mid profile__followers"> followers</div>
                        <div className="profile__mid profile__following"> followings</div>
                    </div>
                    <div className="profile__lower">
                        <div className="profile__name">Mickey Mouse</div>
                        <div className="profile__bio">Bio</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;