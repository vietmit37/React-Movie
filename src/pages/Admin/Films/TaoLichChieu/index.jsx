import { Button, DatePicker, Form, InputNumber, Select } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  actTaoLichChieu,
  actLayThongTinCumRap,
  actLayHeThongRap,
} from "redux/actions/admin.action";

const TaoLichChieu = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      maPhim: params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: (values) => {
      dispatch(actTaoLichChieu(values));
    },
  });
  const { heThongRap, cumRapChieu } = useSelector(
    (state) => state.adminReducer
  );
  useEffect(() => {
    dispatch(actLayHeThongRap());
  }, []);
  const convertSelectHTR = () => {
    return heThongRap?.map((item) => {
      return {
        value: item.maHeThongRap,
        label: item.tenHeThongRap,
      };
    });
  };
  const handleChangeHeThongRap = (value) => {
    dispatch(actLayThongTinCumRap(value));
  };
  const handleChangeCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };
  const onOk = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const onChangeDate = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const onchangeInputNumber = (value) => {
    formik.setFieldValue("giaVe", value);
  };
  let film = {};
  if (localStorage.getItem("filmParams")) {
    film = JSON.parse(localStorage.getItem("filmParams"));
  }
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onSubmitCapture={formik.handleSubmit}
      >
        <h3 className="text-2xl">Tạo lịch chiếu - {film.tenPhim}</h3>
        <img src={film.hinhAnh} alt="..." width={200} height={200} />
        <Form.Item label="Hệ thống rạp">
          <Select
            options={convertSelectHTR()}
            onChange={handleChangeHeThongRap}
            placeholder="Chọn hệ thống rạp"
          />
        </Form.Item>

        <Form.Item label="Cụm rạp">
          <Select
            options={cumRapChieu?.map((cumRap, index) => ({
              label: cumRap.tenCumRap,
              value: cumRap.maCumRap,
            }))}
            onChange={handleChangeCumRap}
            placeholder="Chọn cụm rạp"
          />
        </Form.Item>

        <Form.Item label="Ngày chiếu giờ chiếu">
          <DatePicker
            format="DD/MM/YYYY hh:mm:ss"
            showTime
            onChange={onChangeDate}
            onOk={onOk}
          />
        </Form.Item>

        <Form.Item label="Giá vé">
          <InputNumber onChange={onchangeInputNumber} />
        </Form.Item>
        <Form.Item label="Chức năng">
          <Button htmlType="submit">Tạo lịch chiếu</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TaoLichChieu;
