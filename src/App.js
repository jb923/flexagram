import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Home from "./components/Home";
import Profile from "./components/Profile"
import Login from "./components/Login"
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Post from './components/Post';

import { ProtectedRoute, AuthRoute} from './utils/routeUtils';
import { loadToken } from './actions/sessionActions';
import Upload from './components/Upload';



const App = props => {
    

    useEffect(() => {
        props.loadToken();
    },[loadToken]);



    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/home" isLoggedIn={props.token} component={Home} />
                <Route path="/profile/:userId" isLoggedIn={props.token} component={Profile} />
                <Route path="/signup" component={Signup} />
                <Route path="/upload" component={Upload} />
                {/* <Route path="/Post/:postId" component={Post} /> */}
            </Switch>
        </BrowserRouter>
    );

}

const mapDispatchToProps = dispatch => {
    return {
        loadToken: () => dispatch(loadToken()),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    App
);