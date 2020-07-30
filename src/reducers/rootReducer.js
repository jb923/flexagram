import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import postReducer from "./postReducer";



const rootReducer = combineReducers({
    session: sessionReducer,
    post: postReducer,
})

export default rootReducer;