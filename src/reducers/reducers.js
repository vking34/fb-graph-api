import logState from './logState';
import userInfo from './userInfo';
var redux = require('redux');

var reducers = redux.combineReducers({
    user: userInfo,
    log_state: logState
});

export default reducers;