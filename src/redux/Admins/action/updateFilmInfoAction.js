import { history } from "../../../App";
import { updateFilmInfo } from "../../../services/Admins/ManagerFilms"

export const updateFilmInfoAction = (formData) => {
    return async () => {
        try {
            const result = await updateFilmInfo(formData);
            alert('Cập nhật thành công !');
            history.push('/admin/films');
        } catch (errors) {
            alert(errors.response.data.content);
            console.log(errors);
        }
    }
}