import React from "react";
import Login from "./Login";



const LandingPage = props => {


    return (
        <div className="landing__page">
            <div className="landing__image">
                <img className="login__image" src={require("../assets/iphone.png")} alt="landing-img"/>
                <img className="inner__image" src={require("../assets/greece.jpg")} alt="inner-landing"/>
            </div>
            <Login {...props}/>
        </div>
    )
}

export default LandingPage;