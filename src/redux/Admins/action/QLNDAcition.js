
import { Alert } from "antd";
import axios from "axios";
import { render } from "react-dom";
import { history } from "../../../App";
import { CapNhatThongTinNguoiDung, layDanhSachLoaiNguoiDung, layThongTinUser, themNguoiDung, TimKiemNguoiDung, xoaUser } from "../../../services/Admins/ManagerUser";
import { TOKEN, TOKEN_MOVIE, DOMAIN, GP_ID, USERLOGIN } from "../../../util/varsSetting";
import { QLNDreducer } from "../reducers/QLNDreducer";
import { getUserListAction } from "./getListUserAction";

export const themNguoiDungAction = (add) => {
    return async (dispatch) => {
        try {
            let result = await themNguoiDung(add);
            alert('Thêm người dùng thành công !');
            history.push("/admin/users")
        } catch (errors) {
            console.log(errors.response?.data.content);
            alert("Thêm thất bại! Thông tin đã tồn tại")
        
           
        }
    }
}
export const layThongTinUserAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            let result = await layThongTinUser(taiKhoan);
            alert('lấy thông tin người dùng thành công !');
            console.log('result', result.data.content);
            dispatch({
                type: "GET_THONG_TIN_USER",
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
            alert('cập nhật người dùng thành công !');
            history.push("/admin/users")
            console.log('result', result.data.content);

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
            alert('xoá người dùng thành công !');
            // console.log('result', result.data.content);
            dispatch(getUserListAction())
            history.push("/admin/users")
        } catch (errors) {
            console.log(errors.response?.data)
            alert("Người dùng này đã đặt vé xem phim không thể xóa!")
        }
    }

}

//   export const layDanhSachLoaiNguoiDungAction = () => { 
//     return async (dispatch) => { 
//         try {
//             let result = await layDanhSachLoaiNguoiDung()
//             console.log('result', result.data.content);
//             let  action =({
//                 type : "LOAI",
//                 maLoaiNguoiDung1:result.data.content
//             })
//             dispatch(action)
//         } catch (error) {
//             console.log(error.response?.data)
//         }
//      }
//    }

export const TimKiemNguoiDungAction = (tuKhoa) => {
    return async (dispatch) => {
        try {
            let result = await TimKiemNguoiDung(tuKhoa)
            console.log('result', result.data.content);
           
            let action = ({
                type: "TIM_USER",
                timUser: result.data.content
               
            })
            dispatch(action)

        } catch (error) {
            console.log(error.response?.data)
        }
    }

}