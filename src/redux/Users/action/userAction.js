import { loginService, registerService, updateUserInfo } from '../../../services/Users/UserServices'
import { history } from '../../../App';
import { TOKEN, USERLOGIN } from '../../../util/varsSetting';
import { getInfoUser } from '../../../services/Users/UserServices';
import { SET_INFO_USER, LOGIN } from '../type/UersType';
import { displayLoadingAction, hideLoadingAction } from './LoadingAction';


export const userLoginAction = (loginForm) => {
    return async (dispatch) => {
        try {
            let result = await loginService(loginForm);
            localStorage.setItem(TOKEN, result.data.content.accessToken);

            let userInfo = JSON.stringify(result.data.content);
            localStorage.setItem(USERLOGIN, userInfo);

            let action = {
                type: LOGIN,
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

export const getInfoUserAction = () => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction)
            const result = await getInfoUser();
            if (result.status === 200) {
                dispatch({
                    type: SET_INFO_USER,
                    thongTinNguoiDung: result.data.content
                })
            }
            dispatch(hideLoadingAction)
        } catch (error) {
            dispatch(hideLoadingAction)
            console.log('error', error.response?.data)
        }
    }
}

export const updateInfoAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await updateUserInfo(formData);
            alert("Cập nhật thành công, vui lòng đăng nhập lại !");
            history.push('/login')
            localStorage.removeItem(USERLOGIN);
            
        } catch (error) {
            alert(error.response.data.content);
            console.log(error);
        }
    }
}