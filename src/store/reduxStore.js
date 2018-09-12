import thunkMiddleware from 'redux-thunk';
import  { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux';
import reducers from '../reducers/reducers';
var redux = require('redux');

const loggerMiddleware = createLogger();
const store = redux.createStore(
    reducers,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;