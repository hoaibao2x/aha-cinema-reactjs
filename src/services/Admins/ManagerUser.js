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

export const themNguoiDung = () => {
    return http.post(`/QuanLyNguoiDung/ThemNguoiDung`);
}


export const layThongTinUser = (taiKhoan) => {
    return http.get(`/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
}

export const CapNhatThongTinNguoiDung = () => {
    return http.put(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`)

}

export const xoaUser = (taiKhoan) => {
    return http.delete(`QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`)

}