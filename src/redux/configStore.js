import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { FilmsManagerReducer } from './Admins/reducers/FilmsManagerReducer';
import { CarouselReducer } from './reducers/CarouselReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';

const rootReducer = combineReducers({
    FilmsManagerReducer,
    CarouselReducer,
    QuanLyPhimReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));