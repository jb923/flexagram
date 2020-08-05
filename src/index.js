import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import './stylesheets/navbar.css';
import './stylesheets/Feed.css';
import './stylesheets/CommentsFeed.css';
import './stylesheets/Profile.css';
import './stylesheets/LandingPage.css';


const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
