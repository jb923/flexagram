import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import { Redirect} from 'react-router-dom';

import Navbar from './Navbar';
import Feed from "./Feed";

import { loadToken } from "../actions/sessionActions";
import { fetchFeedPosts } from "../actions/postActions";
import { fetchPosts } from "../actions/postActions";
import { baseUrl } from "../config";


const Home = (props) => {
    const userId = window.localStorage.getItem("flexagram/authentication/USER_ID");
    const [feedData, setfeedData] = useState("");
    const [userInfo, setUserInfo] = useState("");


    useEffect(() => {
        props.loadToken();
    },[loadToken]);

    useEffect(() => {
        if (userId) {
            (async () => {
                const res = await fetch(`${baseUrl}/api/home/${userId}`);
                const data = await res.json();
                setfeedData(data);
            })();
        }
    }, [userId]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${baseUrl}/api/profileinfo/${userId}`);
            const userInfo = await res.json();
            setUserInfo(userInfo);
        })();
    }, [userId]);

    useEffect(() => {   
        (async () => {
            await props.fetchPosts();
        })();
    }, []);

    if (!localStorage.getItem("flexagram/authentication/token")) {
        return <Redirect to="/" />
    } else {
        return (
            <>
                <Navbar userInfo={userInfo} {...props}/>
                <Feed feedData={feedData} {...props}/>
                {/* <Footer /> */}
            </>
        )
    }
    // return (
    //     <>
    //         <Navbar userInfo={userInfo} {...props}/>
    //         <Feed feedData={feedData} {...props}/>
    //         {/* <Footer /> */}
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
    Home
);