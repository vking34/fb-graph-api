import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import registerServiceWorker from './RegisterServiceWorker';
import {Provider} from 'react-redux';
import App from './components/App';
import store from './store/reduxStore';

ReactDOM.render(
    <div className="container">
        <Provider store={store}>
            <App/>
        </Provider>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
