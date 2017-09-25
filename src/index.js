import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { LocaleProvider } from 'antd';
import esMx from 'antd/lib/locale-provider/es_ES';
import configureStore from './store/configureStore';

import {Provider} from 'react-redux';

const store = configureStore();


const WithRouter = () => (

    <LocaleProvider locale={esMx}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </LocaleProvider>
);

const WithProvider = () => (
    <Provider store={store}>
        <WithRouter />
    </Provider>
)

ReactDOM.render(<WithProvider />, document.getElementById('root'));
registerServiceWorker();
