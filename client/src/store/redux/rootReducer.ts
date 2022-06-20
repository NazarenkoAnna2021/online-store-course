import { combineReducers } from 'redux';
import user from './reducers/userSlice';
import devices from './reducers/deviceSlice';

export const rootReducer = combineReducers({
    user,
    devices,
});