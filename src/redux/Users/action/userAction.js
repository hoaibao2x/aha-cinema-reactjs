import { loginService } from '../../../services/Users/UserServices'
import { history } from '../../../App';
import {TOKEN, USERLOGIN} from '../../../util/varsSetting'


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
            history.push('/admin/films');
        } catch (errors) {
            console.log(errors)
        }
    }
}