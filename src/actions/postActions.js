import { baseUrl } from '../config';

export const LOAD_POSTS = "flexagram/LOAD_POSTS";
export const LOAD_FEED_POSTS = "flexagram/LOAD_FEED_POSTS";

const loadAllPosts = list => ({ type: LOAD_POSTS, list });
const loadFeedPosts = list => ({ type: LOAD_FEED_POSTS, list});

export const fetchPosts = () => async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/posts`);

    if (response.ok) {
        const list = await response.json();
        dispatch(loadAllPosts(list));
    }
}

export const fetchFeedPosts = (userId) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/home/${userId}`);

    if (response.ok) {
        const list = await response.json();
        dispatch(loadFeedPosts(list));
    }
}

