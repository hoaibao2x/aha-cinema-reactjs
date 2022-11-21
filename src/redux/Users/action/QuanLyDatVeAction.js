import { bookingTicket, getDetailTicket } from "../../../services/Users/QuanLyDatVeService";
import { ThongTinDatVe } from "../../../_core/models/ThongTinDatVe";
import { BOOK_TICKETED, CHANGE_TABS, SET_DETAIL_TICKET } from "../type/QuanLyDatVeType"
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";


export const getDetailTicketAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await getDetailTicket(maLichChieu);
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

export const bookingTicketAction = (thongTinDatVe = new ThongTinDatVe) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction)
            const result = await bookingTicket(thongTinDatVe);
            await dispatch(getDetailTicketAction(thongTinDatVe.maLichChieu))
            await dispatch({ type: BOOK_TICKETED })
            await dispatch(hideLoadingAction)
            dispatch({
                type:CHANGE_TABS
            })

        } catch (error) {
             dispatch(hideLoadingAction)
            console.log('error', error.response?.data)
        }
    }
}