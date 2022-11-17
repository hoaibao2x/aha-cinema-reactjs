import { removeFilm } from "../../../services/Admins/ManagerFilms";
import { getFilmsListAction } from "./getFilmsListAction";

export const removeFilmAction = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await removeFilm(maPhim);
            alert('Xóa phim thành công !');
            dispatch(getFilmsListAction())
        } catch (errors) {
            console.log(errors)
        }
    }
}