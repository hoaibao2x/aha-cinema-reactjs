import { getFilmDetail } from "../../../services/Users/QuanLyRapServices";
import { SET_DETAIL_FILM } from "../type/QuanLyRapType";


export const getDetailFilmAction = (id) => {
    return async (dispatch) => {
        try {
            const result = await getFilmDetail(id);

            dispatch({
                type: SET_DETAIL_FILM,
                filmDetail: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}