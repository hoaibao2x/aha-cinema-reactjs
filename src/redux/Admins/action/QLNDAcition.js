
import axios from "axios";
import { history } from "../../../App";
import { CapNhatThongTinNguoiDung, layDanhSachLoaiNguoiDung, layThongTinUser, themNguoiDung ,xoaUser} from "../../../services/Admins/ManagerUser";
import { TOKEN,TOKEN_MOVIE,DOMAIN,GP_ID,USERLOGIN } from "../../../util/varsSetting";
import { QLNDreducer } from "../reducers/QLNDreducer";




    // return (dispatch2) => {


    //     let promies = axios({
    //         url: `${DOMAIN}/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`,
    //         method: "post",
    //         data: taiKhoan,
    //         headers: {
    //             "TokenCybersoft": TOKEN_MOVIE
    //         }
    //     });
    //     promies.then((result) => {
    //         console.log(result.data);
    //         // lưu xuống  local storage

    //         localStorage.setItem(TOKEN,result.data.content.accessToken);

    //         let userInfo = JSON.stringify(result.data.content);
    //         localStorage.setItem(USERLOGIN,userInfo);
    //         let action ={
    //             type : "EDIT",
    //             uLogin : userInfo,
    //         }
    //         dispatch2(action)



    //     });
    //     promies.catch((error) => {
    //         console.log(error.response?.data);
    //     });

    // }

    


 export const themNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            // localStorage.setItem(TOKEN,result.data.content.accessToken);

            // let userInfo2 = JSON.stringify(result.data.content);
            // localStorage.setItem(USERLOGIN,userInfo2);
            let result = await themNguoiDung();
            alert('Thêm người dùng thành công !');
            console.log('result', result.data.content);
        } catch (errors) {
            console.log(errors)
        }
    }
 }
 export const layThongTinUserAction = (taiKhoan) => { 
    return async (dispatch) => {
        try {
           
            let result = await layThongTinUser(taiKhoan);
            alert('Thêm người dùng thành công !');
            console.log('result', result.data.content);
          
        } catch (errors) {
            console.log(errors)
        }
    }
}

 export const CapNhatThongTinNguoiDungAction = (userInfo2) => { 
    return async (dispatch) => {
        try {
           
            let result = await CapNhatThongTinNguoiDung(userInfo2);
            alert('cập nhật người dùng thành công !');
            console.log('result', result.data.content);
            dispatch({
                type : "SET_THONG_TIN_PHIM",
                thongTinUser : result.data.content
            })
        } catch (errors) {
            console.log(errors)
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