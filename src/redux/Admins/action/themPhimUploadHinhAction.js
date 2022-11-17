import axios from 'axios';
import { history } from '../../../App';
import { themPhimUploadHinh } from '../../../services/Admins/ManagerFilms';
import { DOMAIN, TOKEN_MOVIE, GP_ID } from '../../../util/varsSetting';

export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await themPhimUploadHinh(formData);
            history.push('/admin/films');
            alert('Thêm phim thành công !');
        } catch (errors) {
            console.log(errors)
        }
    }
}