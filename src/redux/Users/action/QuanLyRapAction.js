import axios from "axios"
import { SET_SYSTEMS_CINEMA } from "../type/QuanLyRapType";
import { getCinemaSystemList } from "../../../services/Users/QuanLyRapServices"
export const getCinemaSystemListAction = () => {
    return async (dispatch) => {
        try {
            const result = await getCinemaSystemList();

            if (result.status === 200) {
                dispatch({
                    type: SET_SYSTEMS_CINEMA,
                    arrSystemsCinema: result.data.content
                })
            }
        } catch (error) {
            console.log(error.response?.data)
        }
    }
}