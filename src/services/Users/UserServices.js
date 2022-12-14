import { http } from '../../util/setting';

export const loginService = (loginForm) => {
    return http.post('/QuanLyNguoiDung/DangNhap', loginForm)
}

export const registerService = regisForm => {
    return http.post('/QuanLyNguoiDung/DangKy', regisForm)
}

export const getInfoUser = () => {
    return http.post('/QuanLyNguoiDung/ThongTinTaiKhoan');
}

export const updateUserInfo = (formData) => {
    return http.put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung', formData);
}