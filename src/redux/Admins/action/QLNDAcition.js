
import axios from "axios";
import { history } from "../../../App";
import { TOKEN,TOKEN_MOVIE,DOMAIN,GP_ID,USERLOGIN } from "../../../util/varsSetting";

export const themNguoiDungAction = (userInfo) => {
    return (dispatch2) => {
        let promies = axios({
            url: `${DOMAIN}/QuanLyNguoiDung/ThemNguoiDung`,
            method: "post",
            data: userInfo,
            headers: {
                "TokenCybersoft": TOKEN_MOVIE
            }
        });
        promies.then((result) => {   
            alert("đăng ký thành công");
            history.push("/login")
            
        });
        promies.catch((error) => {
        });

    }

}

