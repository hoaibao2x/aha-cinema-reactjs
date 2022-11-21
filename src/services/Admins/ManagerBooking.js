import { http } from '../../util/setting';

export const createShowTime = (showTimeInfo) => {
    return http.post(`/QuanLyDatVe/TaoLichChieu`, showTimeInfo);
}