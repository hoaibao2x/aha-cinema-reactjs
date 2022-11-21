import { history } from "../../../App";
import { CapNhatThongTinNguoiDung, layThongTinUser, themNguoiDung, TimKiemNguoiDung, xoaUser } from "../../../services/Admins/ManagerUser";
import { getUserListAction } from "./getListUserAction";
import { GET_THONG_TIN_USER, TIM_USER } from "../type/UserManagerTypes"

export const themNguoiDungAction = (add) => {
    return async (dispatch) => {
        try {
            let result = await themNguoiDung(add);
            alert('Thêm người dùng thành công !');
            history.push("/admin/users")
        } catch (errors) {
            console.log(errors.response?.data.content);
            alert("Thêm thất bại! Email hoặc Tài Khoản đã tồn tại")
        }
    }
}
export const layThongTinUserAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            let result = await layThongTinUser(taiKhoan);
            alert('Lấy thông tin người dùng thành công !');
            dispatch({
                type: GET_THONG_TIN_USER,
                thongTinUser: result.data.content
            })
        } catch (errors) {
            console.log(errors);
        }
    }
}
export const CapNhatThongTinNguoiDungAction = (add) => {
    return async (dispatch) => {
        try {
            let result = await CapNhatThongTinNguoiDung(add);
            alert('Cập nhật người dùng thành công !');
            history.push("/admin/users")
        } catch (errors) {
            console.log(errors.response?.data);
            alert('Không thể cập nhật! kiểm tra lại!');
        }

    }
}

export const xoaUserAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            let result = await xoaUser(taiKhoan);
            alert('Xoá người dùng thành công !');
            dispatch(getUserListAction())
            history.push("/admin/users")
        } catch (errors) {
            console.log(errors.response?.data)
            alert("Người dùng này đã đặt vé xem phim không thể xóa!")
        }
    }
}

export const TimKiemNguoiDungAction = (tuKhoa) => {
    return async (dispatch) => {
        try {
            let result = await TimKiemNguoiDung(tuKhoa);
            let action = ({
                type: TIM_USER,
                timUser: result.data.content
            })
            dispatch(action)
        } catch (error) {
            console.log(error.response?.data)
        }
    }
}