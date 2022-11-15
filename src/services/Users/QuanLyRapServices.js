import { http } from "../../util/setting";
import { GP_SYSTEM_CINEMA } from "../../util/varsSetting"


export const getCinemaSystemList = () => {
    return http.get(`https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GP_SYSTEM_CINEMA}`)
}
