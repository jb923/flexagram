import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import './stylesheets/navbar.css'
import './stylesheets/Feed.css'
import './stylesheets/FeedUser.css'
import './stylesheets/ImageFeed.css'
import './stylesheets/IconBar.css'
import './stylesheets/CommentsFeed.css'
import './stylesheets/Profile.css'

import Home from "./components/Home";
import Profile from "./components/Profile"
import Login from "./components/Login"



const App = props => {
    // useEffect(() => {
    //     props.loadToken();
    // });

    // useEffect(() => {
    //     props.loadCart();
    // });

    // useEffect(() => {
    //     (async () => {
    //         await props.fetchProducts();
    //     })();
    // });

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    return (
        <BrowserRouter>
            <Route path="/login" component={Login}></Route>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
        </BrowserRouter>
    );

}

// const mapDispatchToProps = dispatch => {
//     return {
//         loadToken: () => dispatch(loadToken()),
//         loadCart: () => dispatch(loadCart()),
//         fetchProducts: () => dispatch(fetchProducts())
//     }
// }

export default connect(
    null,
    // mapDispatchToProps
)(
    App
);