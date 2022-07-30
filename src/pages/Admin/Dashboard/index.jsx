import { Table, Tag } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actLayDanhSachNguoiDung } from "redux/actions/admin.action";

const Dasboard = () => {
  const { danhSachNguoiDung } = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actLayDanhSachNguoiDung());
  }, []);
  const columns = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      render: (text) => (
        <p
          style={{
            color: "#1890ff",
          }}
        >
          {text}
        </p>
      ),
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Quyền",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (text) => {
        if (text === "QuanTri") {
          return <Tag color="magenta">{text}</Tag>;
        } else {
          return <Tag color="green">{text}</Tag>;
        }
      },
    },
  ];
  const data = danhSachNguoiDung;
  return (
    <>
      <h2
        style={{
          fontWeight: "bold",
        }}
      >
        Danh Sách Người Dùng
      </h2>
      <Table columns={columns} dataSource={data} rowKey={"taiKhoan"} />
    </>
  );
};

export default Dasboard;
