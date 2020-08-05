import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";

import Navbar from './Navbar';
import FeedUser from './Feeduser';
import ImageFeed from './ImageFeed';
import IconBar from './IconBar';
import CommentsFeed from './CommentsFeed';
import Footer from "./Footer";

import Feed from "./Feed";

import { loadToken } from "../actions/sessionActions";
import { fetchFeedPosts } from "../actions/postActions";
import { fetchPosts } from "../actions/postActions";
import { baseUrl } from "../config";


const Home = (props) => {
    const userId = window.localStorage.getItem("flexagram/authentication/USER_ID");
    const [FeedData, setFeedData] = useState("");


    useEffect(() => {
        props.loadToken();
    });

    useEffect(() => {
        if (userId) {
            (async () => {
                const res = await fetch(`${baseUrl}/api/home/${userId}`);
                const data = await res.json();
                setFeedData(data);
            })();
        }
    }, [userId]);

    useEffect(() => {
        (async () => {
            await props.fetchPosts();
        })();
    }, []);


    return (
        <>
            <Navbar/>
            <div className='main-container'>
                <FeedUser />
                <ImageFeed />
                <IconBar />
                <CommentsFeed />
            </div>
            <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.session.id,
        posts: state.posts,
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