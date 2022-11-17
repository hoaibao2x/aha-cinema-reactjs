const initialState = {
    arrUserDefault: [],
    thongTinUser: {}
}

export const QLNDreducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_USER_LIST":
            // console.log(action.mangUser)
            state.arrUserDefault = action.arrUserDefault
            return { ...state }
        case "SET_THONG_TIN_USER":
            console.log(action.thongTinUser)
                state.thongTinUser = action.thongTinUser
            return { ...state }

        default:
            return state
    }
}

