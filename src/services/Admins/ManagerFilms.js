import axios from 'axios';
import { http } from '../../util/setting';
import { DOMAIN, GP_ID, TOKEN_MOVIE } from '../../util/varsSetting';


export const getFilmsList = (tenPhim = '') => {
    if (tenPhim.trim() !== '') {
        return http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GP_ID}&tenPhim=${tenPhim}`)
    }
    return http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GP_ID}`)
}

export const getFilmInfo = (maPhim) => {
    return http.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
}

export const updateFilmInfo = (formData) => { 
    return http.post(`/QuanLyPhim/CapNhatPhimUpload`, formData)
 }

export const removeFilm = (maPhim) => {
    return http.delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
}

export const getTest = async () => {
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

export const themPhimUploadHinh = (formData) => {
    return http.post(`/QuanLyPhim/ThemPhimUploadHinh`, formData);
}

export const getBanner = async () => {
    try {
        let result = await axios({
            method: 'get',
            url: `${DOMAIN}/QuanLyPhim/LayDanhSachBanner`,
            headers: {
                "TokenCybersoft": TOKEN_MOVIE
            }
        });
        return result;
    } catch (error) {
        console.log(error)
    }
}

export const getFilmList = async () => {
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

