import axios from "axios";
import { DOMAIN, GP_ID, TOKEN_MOVIE } from "../../../util/varsSetting";

export const getFilmListAction = () => {
    return (dispatch) => {
        let promise = axios({
            url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=${GP_ID}`,
            method: "get",
            headers: {
                "TokenCybersoft": TOKEN_MOVIE
            }
        });
        promise.then((result) => {
            dispatch({
                type: "GET_FILMLIST",
                filmList: result.data.content
            })
        });
        promise.catch((error) => {
            console.log(error)
        })
    }
}