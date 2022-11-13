import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { FilmsManagerReducer } from './Admins/reducers/FilmsManagerReducer';
import { UserReducers } from './Users/reducers/UserReducers';

const rootReducer = combineReducers({
    FilmsManagerReducer,
    UserReducers
});

export const store = createStore(rootReducer, applyMiddleware(thunk));