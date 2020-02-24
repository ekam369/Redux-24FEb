import {combineReducers} from 'redux';
import fetchUserReducer from './fetchUserReducer';

export default combineReducers({
    userFetch: fetchUserReducer
})