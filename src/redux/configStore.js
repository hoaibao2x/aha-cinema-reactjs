import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { QLNDreducer } from './Admins/reducers/QLNDreducer';
import { FilmsManagerReducer } from './Admins/reducers/FilmsManagerReducer';
import { UserReducers } from './Users/reducers/UserReducers';
import { CarouselReducer } from './Users/reducers/CarouselReducer';
import { QuanLyPhimReducer } from './Users/reducers/QuanLyPhimReducer';

const rootReducer = combineReducers({
    FilmsManagerReducer,
    UserReducers,
    QuanLyPhimReducer,
    CarouselReducer,
    QLNDreducer,
    
});

export const store = createStore(rootReducer, applyMiddleware(thunk));