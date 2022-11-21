import { http } from "../../util/setting";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";

export const getDetailTicket = (maLichChieu) => {
    return http.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
}

export const bookingTicket = (thongTinDatVe = new ThongTinDatVe()) => {
    return http.post(`/QuanLyDatVe/DatVe`, thongTinDatVe)
}