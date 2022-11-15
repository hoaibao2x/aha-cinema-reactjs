import axios from 'axios';
import { http } from '../../util/setting';
import { DOMAIN, GP_ID, TOKEN_MOVIE } from '../../util/varsSetting';


export const themNguoiDung = (userInfo2) => {
    return http.post(`/QuanLyNguoiDung/ThemNguoiDung`, userInfo2);
}

export const layDanhSachLoaiNguoiDung = async ()=>{
    try {
        let result = await axios({
            method: 'get',
            url: `${DOMAIN}/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung?maNhom=${GP_ID}`,
            headers: {
                "TokenCybersoft": TOKEN_MOVIE
            }
        });
        return result;
    } catch (error) {
        console.log(error)
    }

}
