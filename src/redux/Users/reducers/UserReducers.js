import { USERLOGIN } from '../../../util/varsSetting'

let uLogin = {};

if (localStorage.getItem(USERLOGIN)) {
    uLogin = JSON.parse(localStorage.getItem(USERLOGIN))
}

const initialState = {
    uLogin: uLogin
}

export const UserReducers = (state = initialState, action) => {
    switch (action.type) {

        case 'LOGIN':
            state.uLogin = action.uLogin;
            return { ...state }

        default:
            return state
    }
}
