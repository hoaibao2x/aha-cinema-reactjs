import { history } from '../../../App';
import { themPhimUploadHinh } from '../../../services/Admins/ManagerFilms';

export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await themPhimUploadHinh(formData);
            history.push('/admin/films');
            alert('Thêm phim thành công !');
        } catch (errors) {
            alert(errors.response.data.content);
            console.log(errors)
        }
    }
}