import { baseUrl } from "../config";

export const TOKEN_KEY = "flexagram/authentication/token";
export const SET_TOKEN = "flexagram/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "flexagram/authentication/REMOVE_TOKEN";

const removeToken = () => ({ type: REMOVE_TOKEN });
const setToken = (payload) => {
    return { type: SET_TOKEN, payload };
};

export const loadToken = () => (dispatch) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    const user = window.localStorage.getItem("flexagram/authentication/USER_ID");
    const name = window.localStorage.getItem("flexagram/authentication/name");
    const username = window.localStorage.getItem("flexagram/authentication/username");
    const bio = window.localStorage.getItem("flexagram/authentication/bio");
    const profileimgurl = window.localStorage.getItem("flexagram/authentication/profileimgurl");
    if (token) {
        dispatch(setToken({ token, user, name, username, bio, profileimgurl }));
    }
};


export const createUser = (name, email, password, username, bio, profileimgurl) => async dispatch => {
    const response = await fetch(`${baseUrl}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, username, password }),
    });

    if (response.ok) {
        const payload = await response.json();
        window.localStorage.setItem(TOKEN_KEY, payload.access_token);
        window.localStorage.setItem("flexagram/authentication/USER_ID", payload.user.id);
        window.localStorage.setItem("flexagram/authentication/name", payload.user.name);
        window.localStorage.setItem("flexagram/authentication/username", payload.user.username);
        window.localStorage.setItem("flexagram/authentication/bio", payload.user.bio ? payload.user.bio : "");
        window.localStorage.setItem("flexagram/authentication/profileimgurl", payload.user.profileimgurl);
        dispatch(setToken(payload));
    }
};

export const login = (email, password) => async dispatch => {
    const response = await fetch(`${baseUrl}/api/users/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        const payload = await response.json();
        window.localStorage.setItem(TOKEN_KEY, payload.access_token);
        window.localStorage.setItem("flexagram/authentication/USER_ID", payload.user.id);
        window.localStorage.setItem("flexagram/authentication/name", payload.user.name);
        window.localStorage.setItem("flexagram/authentication/username", payload.user.username);
        window.localStorage.setItem("flexagram/authentication/profileimgurl", payload.user.profileimgurl);
        dispatch(setToken({ token: payload.access_token, user: payload.user.id, name: payload.user.name, username: payload.user.username, profileimgurl: payload.user.profileimgurl }));
    }
};

export const logout = () => (dispatch) => {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem("flexagram/authentication/USER_ID");
    window.localStorage.removeItem("flexagram/authentication/name");
    window.localStorage.removeItem("flexagram/authentication/username");
    window.localStorage.removeItem("flexagram/authentication/bio");
    window.localStorage.removeItem("flexagram/authentication/profileimgurl");
    dispatch(removeToken());
};