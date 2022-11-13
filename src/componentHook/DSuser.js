import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DOMAIN, GP_ID, TOKEN_MOVIE } from '../../util/varsSetting';


export default function ApiRFC(props) {
    let [mangUser, setMangUser] = useState([]);

    //didmount
    useEffect(() => {
        getAPI();
    }, []);



    let getAPI = async () => {

        try {
            let result = await axios({
                method: 'get',
                url: `${DOMAIN}/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GP_ID}`,
                headers: { "TokenCybersoft": TOKEN_MOVIE }
            });
            setMangUser(result.data.content);
            
        } catch (error) {
            console.log(error);
        }

       
    }

  
}

