import {
    Button,
    Cascader,
    DatePicker,
    Empty,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { themPhimUploadHinhAction } from '../../../redux/Admins/action/themPhimUploadHinhAction';
import { GP_ID } from '../../../util/varsSetting';
const AddFilm = () => {

    const [imgSrc, setImgSrc] = useState();
    const dispatch = useDispatch();
    const [submitStatus, setSubmitStatus] = useState(false)

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: '',
            hinhAnh: {}
        },
        validationSchema: Yup.object({
            tenPhim: Yup.string().required('Tên phim không được để trống !'),
            trailer: Yup.string().required('Trailer không được để trống !'),
            moTa: Yup.string().required('Mô tả không được để trống !'),
            ngayKhoiChieu: Yup.string().required('Thời gian không được để trống !').length(10, 'Thời gian không được để trống !'),
            danhGia: Yup.number().required('Số sao không được để trống !').min(1, 'Đánh giá tối thiểu là 1 !').max(10, 'Đánh giá tối thiểu là 10 !')
        }),
        onSubmit: (values) => {
            // setSubmitStatus(true)
            console.log(values);
            values.maNhom = GP_ID;

            // Tạo đối tượng formData => Đưa giá trị values từ formik vào formData
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('File',values.hinhAnh, values.hinhAnh.name);
                }
            }

            // Gọi API gửi các giá trị formData về back-end
            dispatch(themPhimUploadHinhAction(formData));

            // console.log('formik', formData.get('tenPhim'));
        }
    })

    const handleChangeDatePicker = (value) => {
        let dateFormat = moment(value).format('DD/MM/YYYY');
        formik.setFieldValue('ngayKhoiChieu', dateFormat);
    }

    const checkDateWhenTouched = (e) => {
        let isCheck = false;
        if (e.target.value === '') {
            console.log('Null');
            isCheck = true;
            return isCheck
        }
        return isCheck
    }

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const handleChangeFile = (e) => {
        // Lấy file ra từ e
        let file = e.target.files[0];

        if (file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/jpeg') {

            // Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result); // Hình base 64 
            }

            // Đem dữ liệu file lưu vào formik
            formik.setFieldValue('hinhAnh', file);
        }
    }

    const isClearDateInput = (e) => {
        console.log(e.name)
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
                <h3>Thêm mới phim</h3>
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
                        format={'DD/MM/YYYY'}
                        onChange={handleChangeDatePicker}
                        onBlur={formik.handleBlur}
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
                    />
                </Form.Item>
                <Form.Item label="Sắp chiếu">
                    <Switch
                        onChange={handleChangeSwitch('sapChieu')}
                    />
                </Form.Item>
                <Form.Item label="Hot">
                    <Switch
                        onChange={handleChangeSwitch('hot')}
                    />
                </Form.Item>
                <Form.Item label="Số sao">
                    <Input
                        className='w-25'
                        type='number'
                        name='danhGia'
                        // onChange={handleChangeInputNumber('danhGia')}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    // min={1}
                    // max={10}
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
                        src={imgSrc}
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
                        className='btn btn-success'>
                        Thêm phim
                    </button>
                </Form.Item>
            </Form>
        </>
    );
};
export default AddFilm;