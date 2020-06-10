import { combineReducers } from 'redux';
import { fashionReducer } from './reducers/fashionReducer';

export const rootReducer = combineReducers(
    {
        Fashion: fashionReducer
    })