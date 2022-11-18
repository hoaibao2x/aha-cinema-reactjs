import { http } from "../../util/setting";


export const getDetailTicket = (maLichChieu) =>{
    return http.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
}