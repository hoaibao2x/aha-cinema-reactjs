import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { QLNDreducer } from '../reducer/QLNDreducer';

const rootReducer = combineReducers({
    QLNDreducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));