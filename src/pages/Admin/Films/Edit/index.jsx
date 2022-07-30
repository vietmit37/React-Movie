import { DatePicker, Form, Input, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actLayThongTinPhim } from "redux/actions/admin.action";
import { actCapNhatPhim } from "redux/actions/admin.action";
import * as Yup from "yup";

const Edit = () => {
  const [componentSize, setComponentSize] = useState("default");
  const { thongTinPhim } = useSelector((state) => state.adminReducer);
  const [imgSrc, setImgSrc] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(actLayThongTinPhim(params.id));
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: thongTinPhim.maPhim,
      tenPhim: thongTinPhim.tenPhim,
      trailer: thongTinPhim.trailer,
      moTa: thongTinPhim.moTa,
      ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
      dangChieu: thongTinPhim.dangChieu,
      sapChieu: thongTinPhim.sapChieu,
      hot: thongTinPhim.hot,
      danhGia: thongTinPhim.danhGia,
      maNhom: "GP01",
      hinhAnh: null,
    },
    validationSchema: Yup.object().shape({
      tenPhim: Yup.string().required("Tên phim không được để trống"),
      trailer: Yup.string().required("Trailer không được để trống"),
      moTa: Yup.string().required("Mô tả không được để trống"),
      ngayKhoiChieu: Yup.string().required(
        "Ngày khởi chiếu không được để trống"
      ),
      danhGia: Yup.number().required("Đánh giá không được để trống"),
    }),
    onSubmit: (values) => {
      // Tao formData
      console.log(values);
      let formData = new FormData();
      values.maNhom = "GP01";
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      dispatch(actCapNhatPhim(formData, navigate));
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeFile = async (event) => {
    // lay file tu event
    let file = event.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      // Dem du lieu luu vao formik
      await formik.setFieldValue("hinhAnh", file);
      // Tao doi tuong file
      let fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      // khoi tao fileReader
      fileReader.onload = (e) => {
        setImgSrc(e.target.result); //Hình base 64
      };
    }
  };

  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
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
      autoComplete="off"
    >
      <h2
        style={{
          fontWeight: "bold",
        }}
      >
        Thêm Phim Mới
      </h2>

      <Form.Item
        label="Tên phim"
        // Nếu lỗi thì hiện thông báo lỗi
        validateStatus={
          formik.errors.tenPhim && formik.touched.tenPhim ? "error" : "success"
        }
        help={
          formik.errors.tenPhim && formik.touched.tenPhim
            ? formik.errors.tenPhim
            : ""
        }
        hasFeedback
      >
        <Input
          name="tenPhim"
          onChange={formik.handleChange}
          value={formik.values.tenPhim}
        />
      </Form.Item>
      <Form.Item
        label="Trailer"
        // nếu kh lỗi thì hiện hasFeedback
        validateStatus={
          formik.errors.trailer && formik.touched.trailer ? "error" : "success"
        }
        help={
          formik.errors.trailer && formik.touched.trailer
            ? formik.errors.trailer
            : ""
        }
        hasFeedback
      >
        <Input
          name="trailer"
          onChange={formik.handleChange}
          value={formik.values.trailer}
        />
      </Form.Item>
      <Form.Item
        label="Mô tả"
        validateStatus={
          formik.errors.moTa && formik.touched.moTa ? "error" : "success"
        }
        help={
          formik.errors.moTa && formik.touched.moTa ? formik.errors.moTa : ""
        }
        hasFeedback
      >
        <Input
          name="moTa"
          onChange={formik.handleChange}
          value={formik.values.moTa}
        />
      </Form.Item>
      <Form.Item
        label="Ngày khởi chiếu"
        validateStatus={
          formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu
            ? "error"
            : "success"
        }
        help={
          formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu
            ? formik.errors.ngayKhoiChieu
            : ""
        }
        hasFeedback
      >
        <DatePicker
          format={"DD/MM/YYYY"}
          onChange={handleChangeDatePicker}
          value={moment(formik.values.ngayKhoiChieu)}
        />
      </Form.Item>
      <Form.Item label="Đang chiếu">
        <Switch
          onChange={handleChangeSwitch("dangChieu")}
          checked={formik.values.dangChieu}
        />
      </Form.Item>
      <Form.Item label="Sắp chiếu">
        <Switch
          onChange={handleChangeSwitch("sapChieu")}
          checked={formik.values.sapChieu}
        />
      </Form.Item>
      <Form.Item label="Hot">
        <Switch
          onChange={handleChangeSwitch("hot")}
          checked={formik.values.hot}
        />
      </Form.Item>
      <Form.Item
        label="Số sao"
        validateStatus={
          formik.errors.danhGia && formik.touched.danhGia ? "error" : "success"
        }
        help={
          formik.errors.danhGia && formik.touched.danhGia
            ? formik.errors.danhGia
            : ""
        }
        hasFeedback
      >
        <InputNumber
          onChange={handleChangeInputNumber("danhGia")}
          min={1}
          max={10}
          value={formik.values.danhGia}
        />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <input
          type="file"
          onChange={handleChangeFile}
          accept="image/png, image/jpeg,image/gif,image/png"
        />
        <br />
        <img
          style={{ width: 150, height: 150 }}
          src={imgSrc === "" ? thongTinPhim?.hinhAnh : imgSrc}
          alt="..."
        />
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button type="submit">Cật Nhật </button>
      </Form.Item>
    </Form>
  );
};

export default Edit;
