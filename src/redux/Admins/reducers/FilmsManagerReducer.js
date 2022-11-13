const initialState = {
    arrFilmDefault: []
}

export const FilmsManagerReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_FILMS_LIST":
            state.arrFilmDefault = action.mangPhim
            return { ...state }

        default:
            return state
    }
}