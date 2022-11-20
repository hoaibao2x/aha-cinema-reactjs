import { loginService, registerService, userInfoService } from '../../../services/Users/UserServices'
import { history } from '../../../App';
import { TOKEN, USERLOGIN, UBOOKTICKETS } from '../../../util/varsSetting'


export const userLoginAction = (loginForm) => {
    return async (dispatch) => {
        try {
            let result = await loginService(loginForm);
            localStorage.setItem(TOKEN, result.data.content.accessToken);

            let userInfo = JSON.stringify(result.data.content);
            localStorage.setItem(USERLOGIN, userInfo);

            let action = {
                type: 'LOGIN',
                uLogin: userInfo
            }
            dispatch(action);

            alert('Đăng nhập thành công !');
            let loaiNguoiDung = result.data.content.maLoaiNguoiDung;
            if (loaiNguoiDung === 'KhachHang') {
                history.push('/');
            } else {
                history.push('/admin');
            }
        } catch (errors) {
            alert(errors.response.data.content);
            console.log(errors)
        }
    }
}

export const userRegisAction = (regisForm) => {
    return async (dispatch) => {
        try {
            let result = await registerService(regisForm);
            alert('Đăng ký thành công !');
            history.push('/login');
        } catch (errors) {
            console.log(errors)
        }
    }
}

export const userInfoAction = () => {
    return async (dispatch) => {
        try {
            let result = await userInfoService();

            let myInfo = result.data.content;

            let uBookTickets = JSON.stringify(result.data.content);
            localStorage.setItem(UBOOKTICKETS, uBookTickets);

            let action = {
                type: 'UBOOKTICKETS',
                uBookTickets: myInfo
            }
            dispatch(action)

        } catch (errors) {
            console.log(errors);
        }
    }
}