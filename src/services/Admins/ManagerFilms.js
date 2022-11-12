import axios from 'axios';
import { http } from '../../util/setting';
import { DOMAIN, GP_ID, TOKEN_MOVIE } from '../../util/varsSetting';

// Lấy danh sách phim
const getFilmsList = () => {
    return http.get(`/QuanLyPhim/LayDanhSachPhim?MaNhom=${GP_ID}`)
}

export const themPhimUploadHinh = (formData) => {
    return http.post(`/QuanLyPhim/ThemPhimUploadHinh`, formData);
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

