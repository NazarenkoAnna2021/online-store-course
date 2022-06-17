import { combineReducers } from 'redux';
import user from './reducers/userSlice';
import appState from './reducers/appStateSlice';
import types from './reducers/typeSlice';
import devices from './reducers/deviceSlice';
import brands from './reducers/brandSlice';

export const rootReducer = combineReducers({
    user,
    appState,
    types,
    devices,
    brands
});