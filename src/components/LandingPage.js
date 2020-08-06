import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const LandingPage = props => {


    return (
        <div className="landing__page">
            <div className="landing__image">
                <img className="login__image" src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png" />
            </div>
            <Login {...props}/>
        </div>
        

    )
}

export default LandingPage;