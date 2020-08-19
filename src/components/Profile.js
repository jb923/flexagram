import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect} from 'react-router-dom';

import Navbar from './Navbar';
import ProfileInfo from './ProfileInfo';
import ProfilePosts from './ProfilePosts';

import { loadToken } from "../actions/sessionActions";
import { fetchFeedPosts } from "../actions/postActions";
import { fetchPosts } from "../actions/postActions";
import { baseUrl } from "../config";

const Profile = props => {
    const userId = window.localStorage.getItem("flexagram/authentication/USER_ID");
    const [UserInfo, setUserInfo] = useState("");
    const [FeedData, setFeedData] = useState("");
    const [FeedArray, setFeedArray] = useState("");

    const currentProfile = props.match.params.userId;
 
    useEffect(() => {
        props.loadToken();
    }, []);


    useEffect(() => {
        (async () => {
            const res = await fetch(`${baseUrl}/api/profileinfo/${currentProfile}`);
            const userInfo = await res.json();
            setUserInfo(userInfo);
            setFeedArray(userInfo.posts);
        })();
    }, [userId]);


    useEffect(() => {
        if (userId) {
            (async () => {
                const res = await fetch(`${baseUrl}/api/home/${userId}`);
                const data = await res.json();
                setFeedData(data);
            })();
        }
    }, [userId]);
    


    if (!localStorage.getItem("flexagram/authentication/token")) {
        return <Redirect to="/" />
    } else {
        return (
            <>
                <Navbar userInfo={UserInfo} {...props}/>
                <ProfileInfo userInfo={UserInfo} {...props}/>
                <ProfilePosts feedArray={FeedArray} />
            </>
        )
    }
    // return (
    //     <>
    //         <Navbar userInfo={UserInfo} {...props}/>
    //         <ProfileInfo userInfo={UserInfo} {...props}/>
    //         <ProfilePosts feedArray={FeedArray} />
    //     </>
    // )
}

const mapStateToProps = state => {
    return {
        userId: state.session.id,
        posts: state.posts,
        token: state.session.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadToken: () => dispatch(loadToken()),
        fetchFeedPosts: (userId) => dispatch(fetchFeedPosts(userId)),
        fetchPosts: () => dispatch(fetchPosts()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    Profile
);