import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { QLNDreducer } from '../reducer/QLNDreducer';
import { CarouselReducer } from './reducers/CarouselReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';





const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
    QLNDreducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));