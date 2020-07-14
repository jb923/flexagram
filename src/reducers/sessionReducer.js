import { SET_TOKEN, REMOVE_TOKEN } from "../actions/sessionActions";

const initialState = {
    id: null,
    token: null,
    firstName: null,
    lastName: null
}

const sessionReducer = (state = initialState, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case SET_TOKEN:
            return Object.assign(nextState, {id: action.payload.user, token: action.payload.token, firstName: action.payload.firstName, lasatName: action.payload.lastName })
        case REMOVE_TOKEN:
            return initialState;
        default:
            return state
    }
}

export default sessionReducer;