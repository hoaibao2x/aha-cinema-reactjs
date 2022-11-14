import axios from "axios";
// import { managerFilms } from "../../services/Admins/ManagerFilms";
import { DOMAIN, GP_ID, TOKEN_MOVIE } from "../../../util/varsSetting";
// import { GET_FILMLIST } from "../types/FilmListType";

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
            console.log(result)
            dispatch({
                type: "GET_FILMLIST",
                filmList:result.data.content
            })
        });
        promise.catch((error) => { 
            console.log(error)
         })
    }
}