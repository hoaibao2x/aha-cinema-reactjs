import {
    DatePicker,
    Form,
    Input,
    Radio,
    Switch
} from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GP_ID } from '../../../util/varsSetting';
import { useEffect } from 'react';
import { getFilmInfoAction } from '../../../redux/Admins/action/getFilmInfoAction';
import { updateFilmInfoAction } from '../../../redux/Admins/action/updateFilmInfoAction';
const EditFilm = (props) => {

    const [imgSrc, setImgSrc] = useState('');
    const dispatch = useDispatch();
    let { filmInfoReducer } = useSelector((state) => state.FilmsManagerReducer);

    useEffect(() => {
        let { id } = props.match.params;
        dispatch(getFilmInfoAction(id))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: filmInfoReducer.maPhim,
            tenPhim: filmInfoReducer.tenPhim,
            trailer: filmInfoReducer.trailer,
            moTa: filmInfoReducer.moTa,
            ngayKhoiChieu: filmInfoReducer.ngayKhoiChieu,
            dangChieu: filmInfoReducer.dangChieu,
            sapChieu: filmInfoReducer.sapChieu,
            hot: filmInfoReducer.hot,
            maNhom: GP_ID,
            danhGia: filmInfoReducer.danhGia,
            hinhAnh: null
        },
        validationSchema: Yup.object({
            tenPhim: Yup.string().required('Tên phim không được để trống !'),
            trailer: Yup.string().required('Trailer không được để trống !'),
            moTa: Yup.string().required('Mô tả không được để trống !'),
            ngayKhoiChieu: Yup.string().required('Thời gian không được để trống !'),
            danhGia: Yup.number().required('Số sao không được để trống !').min(1, 'Đánh giá tối thiểu là 1 !').max(10, 'Đánh giá tối đa là 10 !')
        }),
        onSubmit: (values) => {
            values.maNhom = GP_ID;

            // Tạo đối tượng formData => Đưa giá trị values từ formik vào formData
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append('File', values.hinhAnh, values.hinhAnh.name);
                    }
                }
            }
            // Gọi API gửi các giá trị formData về back-end
            dispatch(updateFilmInfoAction(formData))
        }
    })

    const handleChangeDatePicker = (value) => {
        let dateFormat = moment(value);
        formik.setFieldValue('ngayKhoiChieu', dateFormat);
    }

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const handleChangeFile = async (e) => {
        // Lấy file ra từ e
        let file = e.target.files[0];

        if (file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/jpeg') {

            // Đem dữ liệu file lưu vào formik
            await formik.setFieldValue('hinhAnh', file);

            // Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result); // Hình base 64 
            }
        }
    }

    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <>
            <Form
                onSubmitCapture={formik.handleSubmit}
                className='mx-auto my-3 container'
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <h3>Cập nhật thông tin phim</h3>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim">
                    <Input
                        name='tenPhim'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tenPhim}
                    />
                    {formik.touched.tenPhim && formik.errors.tenPhim ? (
                        <div
                            className='alert alert-danger mt-2'
                        >
                            {formik.errors.tenPhim}
                        </div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input
                        name='trailer'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.trailer}
                    />
                    {formik.touched.trailer && formik.errors.trailer ? (
                        <div
                            className='alert alert-danger mt-2'
                        >
                            {formik.errors.trailer}
                        </div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input
                        name='moTa'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.moTa}
                    />
                    {formik.touched.moTa && formik.errors.moTa ? (
                        <div
                            className='alert alert-danger mt-2'
                        >
                            {formik.errors.moTa}
                        </div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Ngày khởi chiểu">
                    <DatePicker
                        name='ngayKhoiChieu'
                        format='DD/MM/YYYY'
                        onChange={handleChangeDatePicker}
                        onBlur={formik.handleBlur}
                        value={moment(formik.values.ngayKhoiChieu)}
                    />
                    {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu ? (
                        <div
                            className='alert alert-danger mt-2'
                        >
                            {formik.errors.ngayKhoiChieu}
                        </div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Đang chiếu">
                    <Switch
                        onChange={handleChangeSwitch('dangChieu')}
                        checked={formik.values.dangChieu}
                    />
                </Form.Item>
                <Form.Item label="Sắp chiếu">
                    <Switch
                        onChange={handleChangeSwitch('sapChieu')}
                        checked={formik.values.sapChieu}
                    />
                </Form.Item>
                <Form.Item label="Hot">
                    <Switch
                        onChange={handleChangeSwitch('hot')}
                        checked={formik.values.hot}
                    />
                </Form.Item>
                <Form.Item label="Số sao">
                    <Input
                        className='w-25'
                        type='number'
                        name='danhGia'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.danhGia}
                    />
                    {formik.errors.danhGia && formik.touched.danhGia ? (
                        <div
                            className='alert alert-danger mt-2'
                        >
                            {formik.errors.danhGia}
                        </div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input
                        type='file'
                        onChange={handleChangeFile}
                        accept='image/jpg,image/png,image/jpeg'
                    />
                    <br />
                    <img
                        style={{ width: 150, height: 150 }}
                        src={imgSrc === '' ? filmInfoReducer.hinhAnh : imgSrc}
                        alt="..."
                    />
                    {imgSrc === undefined ? (
                        <div
                            className='alert alert-danger mt-2'
                        >
                            <span>Hình ảnh không được để trống !</span>
                        </div>
                    ) : null}
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button
                        type='submit'
                        className='btn btn-info'>
                        Cập nhật
                    </button>
                </Form.Item>
            </Form>
        </>
    );
};
export default EditFilm;