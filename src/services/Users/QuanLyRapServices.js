import { http } from "../../util/setting";
import { GP_ID } from "../../util/varsSetting"


export const getCinemaSystemList = () => {
    return http.get(`https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GP_ID}`)
}
