import { GET_FILMLIST } from "../type/FilmListType"

const initialState = {
    arrFilm: [
        {
            "maPhim": 1343,
            "tenPhim": "Trainwreck",
            "biDanh": "trainwreck",
            "trailer": "https://www.youtube.com/embed/2MxnhBPoIx4",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
            "moTa": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
            "maNhom": "GP15",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
        },
    ]
}

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_FILMLIST":
            state.arrFilm = action.filmList
           
            return {...state}

        default:
            return state
    }
}
