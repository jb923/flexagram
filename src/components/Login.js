import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../actions/sessionActions";

const Login = props => {
    const [Loginemail, setLoginEmail] = useState("");
    const [Loginpassword, setLoginPassword] = useState("");

    const updateEmail = (event) => setLoginEmail(event.target.value);
    const updatePassword = (event) => setLoginPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await props.login(Loginemail, Loginpassword);
    };

    const handleDemoUser = async (event) => {
        event.preventDefault();
        await props.login("demouser@demouser.com", "demouser");
    }

    return (
        <>
            <div className="login__container">
                <div className="login__header">Flexagram</div>
                <form className="form__container">
                    <input type="email" onChange={updateEmail} className="form__input" value={Loginemail} placeholder="Email address" />
                    <input type="password" onChange={updatePassword} className="form__input" value={Loginpassword} placeholder="Password" />
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
