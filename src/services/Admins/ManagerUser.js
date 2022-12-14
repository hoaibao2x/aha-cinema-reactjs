import { http } from '../../util/setting';
import { GP_ID } from '../../util/varsSetting';

export const getUserList = (tuKhoa = "") => {
    if (tuKhoa.trim() !== "") {
        return http.get(`QuanLyNguoiDung/TimKiemNguoiDung?maNhom=${GP_ID}&tuKhoa=${tuKhoa}`)
    }
    return http.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GP_ID}`)
}

export const layDanhSachLoaiNguoiDung = () => {
    return http.get(`QuanLyNguoiDung/LayDanhSachLoaiNguoiDung?maNhom=${GP_ID}`)
}

export const themNguoiDung = (add) => {
    return http.post(`/QuanLyNguoiDung/ThemNguoiDung`, add);
}


export const layThongTinUser = (taiKhoan) => {
    return http.post(`/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
}

export const CapNhatThongTinNguoiDung = (add) => {
    return http.post(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, add)
}

export const xoaUser = (taiKhoan) => {
    return http.delete(`QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`)
}

export const TimKiemNguoiDung = (tuKhoa) => {
    return http.get(`QuanLyNguoiDung/TimKiemNguoiDung?maNhom=${GP_ID}&tuKhoa=${tuKhoa}`)
}