import React from 'react'
import { Button, Checkbox, Form, Input, Cascader, DatePicker, Space, InputNumber, Select } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTheaterCluster, getTheatersInfo } from '../../services/Admins/ManagerTheaters';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { createShowTime } from '../../services/Admins/ManagerBooking';
import { history } from '../../App';

function ShowTime(props) {

    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    })

    useEffect(() => {
        theaterInfoResult();
    }, [])

    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
        validationSchema: Yup.object({
            ngayChieuGioChieu: Yup.string().required('Thời gian không được để trống !'),
            giaVe: Yup.string().required('Giá vé không được để trống !')
        }),
        onSubmit: async (values) => {
            try {
                const result = await createShowTime(values);
                alert(result.data.content);
                history.push('/admin/films');
            } catch (errors) {
                alert(errors.response.data.content);
            }
        }
    })

    const theaterInfoResult = async () => {
        try {
            let result = await getTheatersInfo();
            setState({
                ...state,
                heThongRapChieu: result.data.content
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeHeThongRap = async (values, option) => {
        // Từ hệ thống rạp call API lấy thông tin rạp
        try {
            let result = await getTheaterCluster(values);
            // Gán giá trị cụm rạp vào state.cumRapChieu
            setState({
                ...state,
                cumRapChieu: result.data.content
            })
        } catch (errors) {
            console.log(errors.response.data);
        }
    }

    const handleChangeCumRap = (values) => {
        formik.setFieldValue('maRap', values)
    }

    const handleChangeNumber = (values) => {
        formik.setFieldValue('giaVe', values);
    }

    const convertSelectHTR = () => {
        return state.heThongRapChieu?.map((htr, index) => {
            return { label: htr.tenHeThongRap, value: htr.maHeThongRap }
        })
    }

    const convertSeletCumRap = () => {
        return state.cumRapChieu?.map((cumRap, index) => {
            return { label: cumRap.tenCumRap, value: cumRap.maCumRap }
        })
    }

    const onChangeDate = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY HH:mm:ss'));
    };

    const onOk = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY HH:mm:ss'));
    };

    return (
        <Form
            onSubmitCapture={formik.handleSubmit}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 8,
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >
            <h3>Tạo lịch chiếu - {props.match.params.tenPhim}</h3>

            <Form.Item
                label="Hệ thống rạp"
            >
                <Select options={convertSelectHTR()} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />
            </Form.Item>
            <Form.Item
                label="Cụm rạp"
            >
                <Select options={convertSeletCumRap()} onChange={handleChangeCumRap} placeholder="Chọn cụm rạp" />
            </Form.Item>
            <Form.Item
                label="Ngày giờ khởi chiếu"
            >
                <Space direction="vertical" size={12}>
                    <DatePicker format="DD/MM/YYYY HH:mm:ss" showTime onChange={onChangeDate} onOk={onOk} placeholder='Chọn ngày giờ khởi chiếu' />
                    {formik.touched && formik.errors.ngayChieuGioChieu ? (<div className='alert alert-danger'>{formik.errors.ngayChieuGioChieu}</div>) : null}
                </Space>
            </Form.Item>
            <Form.Item
                label='Giá vé'
            >
                <InputNumber min={75000} max={150000} onChange={handleChangeNumber} />
                {formik.touched.giaVe && formik.errors.giaVe ? (<div className='alert alert-danger mt-2'>{formik.errors.giaVe}</div>) : null}
            </Form.Item>
            <Form.Item
                label='Chức năng'
            >
                <Button htmlType='submit'>Tạo lịch chiêu</Button>
            </Form.Item>
        </Form>
    )
}

export default ShowTime