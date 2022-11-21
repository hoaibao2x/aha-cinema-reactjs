import { GET_FILMS_LIST, GET_FILM_INFO } from '../type/FilmManagerTypes'

const initialState = {
    arrFilmDefault: [],
    filmInfoReducer: {}
}

export const FilmsManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_FILMS_LIST:
            state.arrFilmDefault = action.mangPhim
            return { ...state }

        case GET_FILM_INFO:
            state.filmInfoReducer = action.filmInfo;
            return { ...state }

        default:
            return state
    }
}