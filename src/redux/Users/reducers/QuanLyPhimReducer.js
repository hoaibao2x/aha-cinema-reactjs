import { GET_FILMLIST, SET_FILM_COMING_SOON, SET_FILM_SHOWING } from "../type/QuanLyPhimType"

const initialState = {
    arrFilm: [

    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: []
}

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FILMLIST: {
            state.arrFilm = action.filmList;
            state.arrFilmDefault = state.arrFilm;
            return { ...state }
        }
        case SET_FILM_SHOWING: {
            state.dangChieu = !state.dangChieu;
            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu)
            return { ...state }
        }

        case SET_FILM_COMING_SOON: {
            state.sapChieu = !state.sapChieu;
            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu)
            return { ...state }
        }


        default:
            return state
    }
}
