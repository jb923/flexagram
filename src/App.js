import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";


import Home from "./components/Home";
import Profile from "./components/Profile"
import Login from "./components/Login"
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Post from './components/Post';



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
            <Route exact path="/" component={LandingPage}></Route>
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/signup" component={Signup} />
            {/* <Route path="/Post/:postId" component={Post} /> */}
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