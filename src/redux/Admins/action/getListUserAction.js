import { getUserList } from '../../../services/Admins/ManagerUser';
import { GET_USER_LIST } from "../type/UserManagerTypes"

export const getUserListAction = (tuKhoa = "") => {

    return async (dispatch) => {
        try {
            const result = await getUserList(tuKhoa)
            dispatch({
                type: GET_USER_LIST,
                arrUserDefault: result.data.content
            })

        } catch (error) {
            console.log(error);
        }
    }
}