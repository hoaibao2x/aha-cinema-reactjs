
import axios from "axios";
import { history } from "../../../App";
import { layDanhSachLoaiNguoiDung, themNguoiDung } from "../../../services/Admins/ManagerUser";
import { TOKEN,TOKEN_MOVIE,DOMAIN,GP_ID,USERLOGIN } from "../../../util/varsSetting";



export const themNguoiDungAction = (userInfo2) => {
    return async (dispatch) => {
        try {
            // localStorage.setItem(TOKEN,result.data.content.accessToken);

            // let userInfo2 = JSON.stringify(result.data.content);
            // localStorage.setItem(USERLOGIN,userInfo2);
            let result = await themNguoiDung(userInfo2);
            alert('Thêm người dùng thành công !');
            console.log('result', result.data.content);
        } catch (errors) {
            console.log(errors)
        }
    }
    
    
    
    // return (dispatch2) => {


    //     let promies = axios({
    //         url: `${DOMAIN}/QuanLyNguoiDung/ThemNguoiDung?maNhom=${GP_ID}`,
    //         method: "post",
    //        data :userInfo2,
    //         headers: {
    //             "TokenCybersoft": TOKEN_MOVIE
    //         }
    //     });
    //     promies.then((result) => {
    //         console.log(result.data);
    //         // lưu xuống  local storage

    //         localStorage.setItem(TOKEN,result.data.content.accessToken);

    //         let userInfo2 = JSON.stringify(result.data.content);
    //         localStorage.setItem(USERLOGIN,userInfo2);
    //         let action ={
    //             type : "ADD_USER",
    //             uLogin : userInfo2,
    //         }
    //         dispatch2(action)



    //     });
    //     promies.catch((error) => {
    //         console.log(error.response?.data);
    //     });

    // }
}

