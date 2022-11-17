const initialState = {
    arrUserDefault: [],
    thongTinUser: {},
    timUser: {}


}

export const QLNDreducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_USER_LIST":
            // console.log(action.mangUser)
            state.arrUserDefault = action.arrUserDefault
            return { ...state }
        case "GET_THONG_TIN_USER":
            console.log(action.thongTinUser)
            state.thongTinUser = action.thongTinUser
            return { ...state }
        case "TIM_USER":
            console.log(action.timUser);
            state.timUser = action.timUser
            return { ...state }

        default:
            return state
    }
}

