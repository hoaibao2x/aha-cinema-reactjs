import { BOOK_TICKET, BOOK_TICKETED, CHANGE_TABS, CHANG_ACTIVE_TABS, SET_DETAIL_TICKET } from "../type/QuanLyDatVeType";
import { ThongTinLichChieu } from "../../../_core/models/ThongTinPhongve";

const initialState = {
    detailTicket: new ThongTinLichChieu(),
    danhSachGheDangDat: [],
    tabActice: "1"
}

export const QuanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DETAIL_TICKET: {
            state.detailTicket = action.detailTicket
            return { ...state }
        }

        case BOOK_TICKET: {

            let danhSachGheCapNhat = [...state.danhSachGheDangDat];

            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe)

            if (index != -1) {
                danhSachGheCapNhat.splice(index, 1)
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon)
            }

            return { ...state, danhSachGheDangDat: danhSachGheCapNhat }
        }

        case BOOK_TICKETED: {
            state.danhSachGheDangDat = []
            return { ...state }
        }

        case CHANGE_TABS: {
            state.tabActice = "2"
            return { ...state }
        }

        case CHANG_ACTIVE_TABS: {
            state.tabActice = action.number
            return { ...state }
        }

        default:
            return state
    }
}
