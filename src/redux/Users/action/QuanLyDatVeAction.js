import { getDetailTicket } from "../../../services/Users/QuanLyDatVeService";
import { SET_DETAIL_TICKET } from "../type/QuanLyDatVeType"

export const getDetailTicketAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await getDetailTicket(maLichChieu);
            console.log('result',result)
            if (result.status === 200) {
                dispatch({
                    type: SET_DETAIL_TICKET,
                    detailTicket: result.data.content
                })
            }

        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}