import React from "react";
import Login from "./Login";



const LandingPage = props => {


    return (
        <div className="landing__page">
            <div className="landing__image">
                <img className="login__image" src={require("../assets/iphone.png")} alt="landing-img"/>
                <img className="inner__image" src={require("../assets/umbrella.jpg")} alt="inner-landing"/>
            </div>
            <Login {...props}/>
            {/* <div className="demo2__container">
                <p>Example Login: </p>
                <p>email: ceejayduhh@ceejayduhh.com</p>
                <p>pw: ceejayduhh</p>
            </div> */}
        </div>
    )
}

export default LandingPage;