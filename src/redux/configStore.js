import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { QLNDreducer } from './Admins/reducers/QLNDreducer';
import { FilmsManagerReducer } from './Admins/reducers/FilmsManagerReducer';
import { UserReducers } from './Users/reducers/UserReducers';
import { CarouselReducer } from './Users/reducers/CarouselReducer';
import { QuanLyPhimReducer } from './Users/reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from "./Users/reducers/QuanLyRapReducer";
import { QuanLyDatVeReducer } from './Users/reducers/QuanLyDatVeReducer';
import { LoadingReducer } from './Users/reducers/LoadingReducer';


const rootReducer = combineReducers({
    FilmsManagerReducer,
    UserReducers,
    QuanLyPhimReducer,
    CarouselReducer,
    QLNDreducer,
    QuanLyRapReducer,
    QuanLyDatVeReducer,
    LoadingReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));