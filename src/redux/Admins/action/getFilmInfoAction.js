import { getFilmInfo } from "../../../services/Admins/ManagerFilms";

export const getFilmInfoAction = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await getFilmInfo(maPhim);
            let action = ({
                type: 'GET_FILM_INFO',
                filmInfo: result.data.content
            });
            dispatch(action);
        } catch (errors) {
            console.log(errors)
        }
    }
}