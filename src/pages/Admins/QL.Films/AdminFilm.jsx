import React from 'react'
import { Table, Input, Space, Button } from 'antd'
import { AudioOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFilmsListAction } from '../../../redux/Admins/action/getFilmsListAction';
import { object } from 'yup';
import { NavLink } from 'react-router-dom';

const { Search } = Input;

function AdminFilm() {

    let dispatch = useDispatch();

    useEffect(() => {
        getAPI()
    }, []);

    let { arrFilmDefault } = useSelector(state => state.FilmsManagerReducer);

    let getAPI = () => {
        let action = getFilmsListAction();

        dispatch(action);
    }


    // // Get Films List from API
    // const { arrFilmDefault } = useSelector(state => state.FilmsManagerReducer)

    // console.log(arrFilmDefault)

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getFilmsListAction);
    // }, [])

    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',
            value: (text, object) => { return <span>{text}</span> },
            width: 100,

            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            width: 100,
            render: (text, film, index) => {
                return <>
                    <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} onError={(e) => {
                        e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/50`
                    }} />
                </>
            }
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            width: 300,

            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();

                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',

            sorter: (a, b) => {
                let moTaA = a.moTa.toLowerCase().trim();
                let moTaB = b.moTa.toLowerCase().trim();

                if (moTaA > moTaB) {
                    return 1;
                }
                return -1;
            },
            render: (text, film) => {
                return <>
                    {film.moTa.length > 50 ? film.moTa.substr(0, 50) + ' ...' : film.moTa}
                </>
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Hành động',
            width: 200,
            render: (text, film) => {
                return <>
                    <NavLink className='btn btn-info mr-2' to= '/'><EditOutlined /></NavLink>
                    <NavLink className='btn btn-danger' to='/'><DeleteOutlined /></NavLink>
                </>
            },
            sortDirections: ['descend', 'ascend'],
        }
    ];

    const data = arrFilmDefault;

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const onSearch = (value) => console.log(value);

    return (
        <div className='container mx-auto'>
            <h3>Quản lý phim</h3>
            <Button className='mb-3'>Thêm phim</Button>
            <Search
                className='mb-5'
                placeholder="input search text"
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}

export default AdminFilm