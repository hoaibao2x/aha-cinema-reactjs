import React from 'react'
import { Table, Input, Space, Button } from 'antd'
import { AudioOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFilmsListAction } from '../../../redux/Admins/action/getFilmsListAction';
import { object } from 'yup';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';
import { removeFilmAction } from '../../../redux/Admins/action/removeFilmAction';

const { Search } = Input;

function AdminFilm() {

    let dispatch = useDispatch();
    let { arrFilmDefault } = useSelector(state => state.FilmsManagerReducer);

    useEffect(() => {
        getAPI()
    }, []);


    console.log('arr before', arrFilmDefault)

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
            width: 150,

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
                    <NavLink key={1} className='btn btn-info mr-2' to={`/admin/films/edit/${film.maPhim}`}><EditOutlined /></NavLink>
                    <button key={2} className='btn btn-danger' onClick={() => {
                        if (window.confirm(`Bạn có muỗn xóa phim ${film.tenPhim}`)) {
                            dispatch(removeFilmAction(film.maPhim))
                            console.log('arr after', arrFilmDefault);
                        }
                    }}><DeleteOutlined /></button>
                </>
            },
            sortDirections: ['descend', 'ascend'],
        }
    ];

    const data = arrFilmDefault;

    const onChange = (pagination, filters, sorter, extra) => {
        // console.log('params', pagination, filters, sorter, extra);
    };

    const onSearch = (value) => {
        dispatch(getFilmsListAction(value))
    };

    return (
        <div className='container mx-auto'>
            <h3>Quản lý phim</h3>
            <Button className='mb-3' onClick={() => {
                history.push('/admin/films/addnew')
            }}>Thêm phim</Button>
            <Search
                className='mb-5'
                placeholder="input search text"
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />
            <Table rowKey={'maPhim'} columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}

export default AdminFilm