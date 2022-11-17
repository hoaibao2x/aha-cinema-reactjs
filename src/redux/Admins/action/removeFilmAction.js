import { removeFilm } from "../../../services/Admins/ManagerFilms";

export const removeFilmAction = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await removeFilm(maPhim);
            alert('Xóa phim thành công !')
            console.log(result);
        } catch (errors) {
            console.log(errors)
        }
    }
}