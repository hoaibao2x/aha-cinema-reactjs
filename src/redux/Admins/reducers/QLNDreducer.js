const initialState = {
    arrUserDefault: [],
    thongTinUser: {},
    timUser: {},
    
    maLoaiNguoiDung1:{}


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
        case "LOAI":
            console.log(action.maLoaiNguoiDung1);
            state.maLoaiNguoiDung1 = action.maLoaiNguoiDung1
            return { ...state }

        default:
            return state
    }
}

