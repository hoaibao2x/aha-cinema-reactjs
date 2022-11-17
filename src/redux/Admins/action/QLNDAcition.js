
import axios from "axios";
import { history } from "../../../App";
import { CapNhatThongTinNguoiDung, layDanhSachLoaiNguoiDung, layThongTinUser, themNguoiDung ,xoaUser} from "../../../services/Admins/ManagerUser";
import { TOKEN,TOKEN_MOVIE,DOMAIN,GP_ID,USERLOGIN } from "../../../util/varsSetting";
import { QLNDreducer } from "../reducers/QLNDreducer";





 export const themNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            let result = await themNguoiDung();
            alert('Thêm người dùng thành công !');
            console.log('result', result.data.content);
        } catch (errors) {
            console.log(errors.response?.data);
        }
    }
 }
 export const layThongTinUserAction = (taiKhoan) => { 
    return async (dispatch) => {
        try {
           
            let result = await layThongTinUser(taiKhoan);
            alert('lấy thông tin người dùng thành công !');
            console.log('result', result.data.content);
            // dispatch({
            //     type : "SET_THONG_TIN_USER",
            //     thongTinUser : result.data.content  
            // })
          
        } catch (errors) {
            console.log(errors);
        }
    }
}

 export const CapNhatThongTinNguoiDungAction = () => { 
    return async (dispatch) => {
        try {
           
            let result = await CapNhatThongTinNguoiDung();
            alert('cập nhật người dùng thành công !');
            console.log('result', result.data.content);
           
        } catch (errors) {
            console.log(errors.response?.data);
        }
        
    }
  }

  export const xoaUserAction = (taiKhoan) => {
    return async (dispatch) => { 
        try {
           
            let result = await xoaUser(taiKhoan);
            alert('xoá người dùng thành công !');
            console.log('result', result.data.content);
            dispatch(layThongTinUserAction())
        } catch (errors) {
            console.log(errors.response?.data)
        }
     }
    
  }

  export const layDanhSachLoaiNguoiDungAction = () => { 
    return async (dispatch) => { 
        try {
            let result = await layDanhSachLoaiNguoiDung()
            console.log('result', result.data.content);
            dispatch(layDanhSachLoaiNguoiDungAction())
            
        } catch (error) {
            console.log(error.response?.data)
        }
     }
   }