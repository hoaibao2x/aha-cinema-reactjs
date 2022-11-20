import { http } from '../../util/setting';
import { DOMAIN, GP_ID, TOKEN_MOVIE } from '../../util/varsSetting';

export const getTheatersInfo = () => {
    return http.get(`/QuanLyRap/LayThongTinHeThongRap`);
}

export const getTheaterCluster = (maHeThongRap) => {
    return http.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
}