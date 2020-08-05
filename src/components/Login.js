import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../actions/sessionActions";

import { baseUrl } from "../config";

const Login = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const updateEmail = (event) => setEmail(event.target.value);
    const updatePassword = (event) => setPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await props.login(email, password);
        props.history.push("/");
    };

    const handleDemoUser = async (event) => {
        event.preventDefault();
        await props.login("demouser@demouser.com", "demouser");
        props.history.push("/home")
    }


    return (
        <>
            <div className="login__container">
                <div className="login__header">Flexagram</div>
                <form className="form__container">
                    <input type="email" onChange={updateEmail} className="form__input" value={email} placeholder="Email address" />
                    <input type="password" onChange={updatePassword} className="form__input" value={password} placeholder="Password" />
                    <button className="login__buttons form__button" onClick={handleSubmit}>Log In</button>
                    <button className="login__buttons demo__button" onClick={handleDemoUser}>Demo User</button>
                </form>
                <NavLink to="/signup" className="login__signup">Don't have an account?</NavLink>
            </div>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    Login
);
