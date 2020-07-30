import { LOAD_POSTS } from "../actions/postActions";
import { LOAD_FEED_POSTS } from "../actions/postActions";

const postReducer = ( state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch(action.type) {
        case LOAD_FEED_POSTS:
            let newState = {};
            action.list.result.forEach(post => newState[post.id] = post);
            return Object.assign(nextState, newState);
        case LOAD_POSTS:
            let newState1 = {};
            action.list.posts.forEach(post => newState1[post.id] = post);
            return Object.assign(nextState, newState1);
        default:
            return state;
    }
};

export default postReducer;