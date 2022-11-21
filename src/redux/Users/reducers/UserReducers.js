import { USERLOGIN } from '../../../util/varsSetting'
import { SET_INFO_USER, LOGIN } from '../type/UersType';

let uLogin = {};

if (localStorage.getItem(USERLOGIN)) {
    uLogin = JSON.parse(localStorage.getItem(USERLOGIN))
}

const initialState = {
    uLogin: uLogin,
    thongTinNguoiDung: {}
}

export const UserReducers = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN: {
            state.uLogin = action.uLogin;
            return { ...state }
        }
        case SET_INFO_USER: {
            state.thongTinNguoiDung = action.thongTinNguoiDung
            return { ...state }
        }
        default:
            return state
    }
}
