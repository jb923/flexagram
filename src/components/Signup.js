import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { createUser } from "../actions/sessionActions";


const Signup = props => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const updateEmail = (event) => setEmail(event.target.value);
    const updateName = (event) => setName(event.target.value);
    const updateUsername = (event) => setUsername(event.target.value);
    const updatePassword = (event) => setPassword(event.target.value);
    const updateConfirmPassword = (event) => setConfirmPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            await props.createUser(name, username, email, password, confirmPassword);
            window.location.reload();
        } else {
            alert("Passwords must match!");
        }
    };

    return (
        <div className="signup__container">
            <div className="signup__header">Flexagram</div>
            <p className="signup__p">Sign up to flex on your friends.....or your enemies.</p>
            <form className="form__container" onSubmit={handleSubmit}>
                <div className="form__input-name-container">
                    <input type="text" onChange={updateName} value={name} className="form__input" placeholder="Full Name" />
                    <input type="text" onChange={updateUsername} value={username} className="form__input" placeholder="Username" />
                </div>
                <input type="email" onChange={updateEmail} value={email} className="form__input" placeholder="Email address" />
                <input type="password" onChange={updatePassword} value={password} className="form__input" placeholder="Create a password" />
                <input type="password" onChange={updateConfirmPassword} value={confirmPassword} className="form__input" placeholder="Confirm password" />
                <button className="signupform__button">Join Flexagram</button>
                <NavLink to='/' className="signup__login">already flexing on them?</NavLink>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: (name, username, email, password, confirmPassword) => dispatch(createUser(name, username, email, password, confirmPassword)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    Signup
);
