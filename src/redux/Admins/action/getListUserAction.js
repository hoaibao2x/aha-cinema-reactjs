import axios from 'axios';

import { DOMAIN, TOKEN_MOVIE, GP_ID } from '../../../util/varsSetting';

export const getFilmsListAction = () => {

    return (dispatch2) => {
        let promise = axios({
            method: 'get',
            url: `${DOMAIN}/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GP_ID}`,
            headers: {
                "TokenCybersoft": TOKEN_MOVIE
            }
        });

        promise.then((result) => {
            let action2 = {
                type: 'GET_USER_LIST',
                mangUser: result.data.content
            }

            dispatch2(action2); // Đẩy dữ liệu lên redux
        });

        promise.catch((error) => {
            console.log(error);
        });
    }

}