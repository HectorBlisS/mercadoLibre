import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {configureStore} from "./store/configureStore";
import {Provider} from 'react-redux';
import { getCurrentUserInfo } from './actions/userActions';

//import {loadAds} from './actions/adActions';

export const store = configureStore();
//store.dispatch(loadAds());


const user = JSON.parse(localStorage.getItem("user"));
if(user){
    store.dispatch(getCurrentUserInfo(user));
}

const WithRouter = () => (

    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);


ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
