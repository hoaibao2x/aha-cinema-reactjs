import { http } from '../../util/setting';

export const loginService = (loginForm) => {
    return http.post('/QuanLyNguoiDung/DangNhap', loginForm)
}