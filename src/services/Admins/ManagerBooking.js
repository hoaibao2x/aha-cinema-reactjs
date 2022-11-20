import { http } from '../../util/setting';
import { DOMAIN, GP_ID, TOKEN_MOVIE } from '../../util/varsSetting';

export const createShowTime = (showTimeInfo) => {
    return http.post(`/QuanLyDatVe/TaoLichChieu`, showTimeInfo);
}