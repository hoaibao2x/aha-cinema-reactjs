import { SET_SYSTEMS_CINEMA } from "../type/QuanLyRapType"

const initialState = {
    arrSystemsCinema: []
}

export const QuanLyRapReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_SYSTEMS_CINEMA: {
            state.arrSystemsCinema = action.arrSystemsCinema
            return { ...state }
        }


        default:
            return state
    }
}
