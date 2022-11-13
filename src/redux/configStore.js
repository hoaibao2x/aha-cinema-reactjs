import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { FilmsManagerReducer } from './Admins/reducers/FilmsManagerReducer';
import { UserReducers } from './Users/reducers/UserReducers';
import { CarouselReducer } from './reducers/CarouselReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';

const rootReducer = combineReducers({
    FilmsManagerReducer,
    UserReducers,
    QuanLyPhimReducer,
    CarouselReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));