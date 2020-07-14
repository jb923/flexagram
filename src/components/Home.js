import React, { useState, useEffect, useContext } from "react";
import { connect } from "react-redux";
import Navbar from './Navbar';
// import Feed from './Feed';
import FeedUser from './Feeduser';
import ImageFeed from './ImageFeed';
import IconBar from './IconBar';
import CommentsFeed from './CommentsFeed';
import Footer from "./Footer";
import Feed from "./Feed";


const Home = () => {



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

export default Home;