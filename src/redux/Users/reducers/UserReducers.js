import { USERLOGIN, UBOOKTICKETS } from '../../../util/varsSetting'

let uLogin = null;
let uBookTickets = null;

// if (localStorage.getItem(USERLOGIN) !== null && localStorage.getItem(UBOOKTICKETS) !== null) {
//     uLogin = JSON.parse(localStorage.getItem(USERLOGIN));
//     uBookTickets = JSON.parse(localStorage.getItem(UBOOKTICKETS));
// }

const initialState = {
    uLogin: uLogin,
    uBookTickets: uBookTickets
}

export const UserReducers = (state = initialState, action) => {
    switch (action.type) {

        case 'LOGIN':
            state.uLogin = action.uLogin;
            return { ...state }

        case 'UBOOKTICKETS':
            state.uBookTickets = action.uBookTickets;
            return { ...state }

        default:
            return state
    }
}
