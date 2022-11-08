import axios from 'axios';
import { http } from '../../util/setting';
import { DOMAIN, GP_ID, TOKEN_MOVIE } from '../../util/varsSetting';

export default class ManagerFilms {
    // Lấy danh sách phim
    getFilmsList = () => {
        return http.get(`/QuanLyPhim/LayDanhSachPhim?MaNhom=${GP_ID}`)
    }

    // getTest = async () => {
    //     try {
    //         let result = await axios({
    //             method: 'get',
    //             url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=${GP_ID}`,
    //             headers: {
    //                 "TokenCybersoft": TOKEN_MOVIE
    //             }
    //         });
    //         return result;
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

}