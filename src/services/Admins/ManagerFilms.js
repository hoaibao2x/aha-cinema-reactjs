import axios from 'axios';
import { http } from '../../util/setting';
import { DOMAIN, GP_ID, TOKEN_MOVIE } from '../../util/varsSetting';

class ManagerFilms {
    // Lấy danh sách phim

    getTest = async () => {
        try {
            let result = await axios({
                method: 'get',
                url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=${GP_ID}`,
                headers: {
                    "TokenCybersoft": TOKEN_MOVIE
                }
            });
            return result;
        } catch (error) {
            console.log(error)
        }
    }

    // getFilmsList = () => {
    //     return http.get(`/QuanLyPhim/LayDanhSachPhim?MaNhom=${GP_ID}`)
    // }
}

export const managerFilms = new ManagerFilms();
