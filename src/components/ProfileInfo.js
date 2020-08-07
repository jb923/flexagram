import React, { useState } from "react";
import { connect } from "react-redux";
import { GrLogout } from "react-icons/gr"
import { logout } from "../actions/sessionActions";


const ProfileInfo = props => {
    if (!props.userInfo.user) return null;
    const userId = window.localStorage.getItem("flexagram/authentication/USER_ID");
    

    return (
        <>
            <div className="profile__info--outer">
                <div className="profile__main--contianer">
                    <img className="profile_img" src={props.userInfo.user.profileimgurl} />
                </div>
                <div className="profile__info">
                    <div className="profile__header">
                        <div className="profile__username">{props.userInfo.user.username}</div>
                        {/* <button className="profile__edit">Edit Profile</button> */}
                        <GrLogout className="profile__logout" onClick={props.logout} />
                    </div>
                    <div className="profile__details">
                        <div className="profile__mid profile__posts">{props.userInfo.postsNum} posts</div>
                        <div className="profile__mid profile__followers">{props.userInfo.followersNum} followers</div>
                        <div className="profile__mid profile__following">{props.userInfo.followingNum} followings</div>
                    </div>
                    <div className="profile__lower">
                        <div className="profile__name">{props.userInfo.user.name}</div>
                        <div className="profile__bio">{props.userInfo.user.bio}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect (
    null,
    mapDispatchToProps,
)(
    ProfileInfo
);