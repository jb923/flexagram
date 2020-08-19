import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Home from "./components/Home";
import Profile from "./components/Profile"
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';

// import { ProtectedRoute, AuthRoute} from './utils/routeUtils';
import { loadToken } from './actions/sessionActions';
import Upload from './components/Upload';



const App = props => {
    

    useEffect(() => {
        props.loadToken();
    },[]);



    return (
        <BrowserRouter>
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" isLoggedIn={props.token} component={Home} />
            <Route path="/profile/:userId" isLoggedIn={props.token} component={Profile} />
            <Route path="/upload" isLoggedIn={props.token} component={Upload} />
            <Route path="/signup" component={Signup} />
            {/* <Route path="/Post/:postId" component={Post} /> */}
        </BrowserRouter>
    );

}

const mapStateToProps = state => {
    return {
      token: state.session.token
    };
  };
  

const mapDispatchToProps = dispatch => {
    return {
        loadToken: () => dispatch(loadToken()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    App
);