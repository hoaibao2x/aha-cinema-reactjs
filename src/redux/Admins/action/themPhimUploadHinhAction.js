import axios from 'axios';
import { themPhimUploadHinh } from '../../../services/Admins/ManagerFilms';
import { DOMAIN, TOKEN_MOVIE, GP_ID } from '../../../util/varsSetting';

export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await themPhimUploadHinh(formData);
            alert('Thêm phim thành công !');
            console.log('result', result.data.content);
        } catch (errors) {
            console.log(errors)
        }
    }
}