import axios from 'axios';
import ManagerFilms, { getFilmsList } from '../../../services/Admins/ManagerFilms'
import { DOMAIN, TOKEN_MOVIE, GP_ID } from '../../../util/varsSetting';

export const getFilmsListAction = (tenPhim = '') => {
    return async (dispatch2) => {
        try {
            let result = await getFilmsList(tenPhim);
            let action = {
                type: 'GET_FILMS_LIST',
                mangPhim: result.data.content
            }
            dispatch2(action);
        } catch (errors) {
            console.log(errors);
        }
    }
}