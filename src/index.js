import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
// import "./stylesheets/reset.css";
// import "./stylesheets/index.css";
// import "./stylesheets/navigation.css";
// import "./stylesheets/modal.css";
// import "./stylesheets/main.css";
// import "./stylesheets/brandlogo.css";
// import "./stylesheets/productpage.css";
// import "./stylesheets/footer.css";
// import "./stylesheets/cart.css";
// import "./stylesheets/productlist.css";
// import "./stylesheets/profile.css";


const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
