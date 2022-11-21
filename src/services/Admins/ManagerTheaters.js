import { http } from '../../util/setting';

export const getTheatersInfo = () => {
    return http.get(`/QuanLyRap/LayThongTinHeThongRap`);
}

export const getTheaterCluster = (maHeThongRap) => {
    return http.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
}