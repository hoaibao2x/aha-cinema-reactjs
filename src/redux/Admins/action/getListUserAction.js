
import axios from 'axios';
import { history } from '../../../App';
import { getUserList } from '../../../services/Admins/ManagerUser';



import { DOMAIN, TOKEN_MOVIE, GP_ID } from '../../../util/varsSetting';

export const getUserListAction =  (tuKhoa="") => {

    return async (dispatch) =>{
        try {
            const result = await getUserList(tuKhoa)
            dispatch({
                type: 'GET_USER_LIST',
                arrUserDefault: result.data.content
            })
            
        } catch (error) {
            console.log(error);
            
        }
    }


}