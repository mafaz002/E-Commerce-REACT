import { combineReducers } from 'redux';
import { fashionReducer } from './reducers/fashionReducer';
import { electronicsReducer } from './reducers/electronicsReducer';

export const rootReducer = combineReducers(
    {
        Fashion: fashionReducer,
        Electronics: electronicsReducer
    })