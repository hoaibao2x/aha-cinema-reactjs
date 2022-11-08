import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { FilmsManagerReducer } from './Admins/reducers/FilmsManagerReducer';

const rootReducer = combineReducers({
    FilmsManagerReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));