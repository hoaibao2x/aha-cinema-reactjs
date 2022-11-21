import { http } from "../../util/setting";
import { GP_ID } from "../../util/varsSetting";

export const getCinemaSystemList = () => {
    return http.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GP_ID}`);
}
export const getFilmDetail = (maPhim) => {
    return http.get(`/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
}


