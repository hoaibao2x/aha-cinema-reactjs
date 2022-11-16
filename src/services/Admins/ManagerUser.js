import axios from 'axios';
import { http } from '../../util/setting';
import { DOMAIN, GP_ID, TOKEN_MOVIE } from '../../util/varsSetting';

export const getUserList = (taiKhoan = "") => {
    if (taiKhoan.trim() !== "") {
        return http.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GP_ID}&taiKhoan=${taiKhoan}`)
    }
    return http.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GP_ID}`)
}

export const layDanhSachLoaiNguoiDung =  ( ) => {
    return http.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GP_ID}`)

   
}

export const themNguoiDung = (userInfo2) => {
    return http.post(`/QuanLyNguoiDung/ThemNguoiDung`, userInfo2);
}


export const layThongTinUser = (taiKhoan) => {
    return http.get(`/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
}

export const CapNhatThongTinNguoiDung = (userInfo2) => {
    return http.put(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, userInfo2)

}

export const xoaUser = (taiKhoan) => {
    return http.delete(`QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`)

}