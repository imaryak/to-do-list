import{combineReducers,createStore}from 'redux';

import todo from './todo';
const allReducers=combineReducers({
    todo,
})
export default createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

