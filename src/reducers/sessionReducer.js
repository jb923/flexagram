import { SET_TOKEN, REMOVE_TOKEN } from "../actions/sessionActions";

const initialState = {
    id: null,
    token: null,
    name: null,
}

const sessionReducer = (state = initialState, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case SET_TOKEN:
            return Object.assign(nextState, { id: action.payload.user, token: action.payload.token, name: action.payload.name, username: action.payload.username, bio: action.payload.bio, profileimgurl: action.payload.profileimgurl })
        case REMOVE_TOKEN:
            return initialState;
        default:
            return state
    }
}

export default sessionReducer;