import { Button, Table } from "antd";
import Search from "antd/lib/input/Search";
import React, { Fragment, useEffect, useRef } from "react";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actFetchData } from "redux/actions/listMovie";
import { actXoaPhim } from "redux/actions/admin.action";
import _ from "lodash";
import { actSearchMovie } from "redux/actions/admin.action";

function Films() {
  const { dataDefault } = useSelector((state) => state.listMovieReducer);
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  useEffect(() => {
    dispatch(actFetchData());
  }, []);

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink key={1} to={`/admin/films/edit/${film.maPhim}`}>
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              onClick={() => {
                //Gọi action xoá
                if (
                  window.confirm("Bạn có chắc muốn xoá phim " + film.tenPhim)
                ) {
                  //Gọi action
                  dispatch(actXoaPhim(film.maPhim));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </span>
            <NavLink
              key={3}
              className=" mr-2 text-2xl"
              to={`/admin/films/taoLichChieu/${film.maPhim}`}
              onClick={() => {
                localStorage.setItem("filmParams", JSON.stringify(film));
              }}
            >
              <CalendarOutlined style={{ color: "green" }} />{" "}
            </NavLink>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
  ];
  const data = dataDefault;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <h2
        style={{
          fontWeight: "bold",
        }}
      >
        Quản lý Phim
      </h2>
      <Button
        style={{
          marginBottom: "20px",
        }}
        type="primary"
      >
        <NavLink to="/admin/films/addnew">Thêm phim</NavLink>
      </Button>
      <Search
        placeholder="Search"
        enterButton={<SearchOutlined />}
        size="large"
        onChange={(e) => {
          if (searchRef.current) {
            clearTimeout(searchRef.current);
          }
          searchRef.current = setTimeout(() => {
            dispatch(actSearchMovie(e.target.value));
          }, 500);
        }}
        // onSearch={onSearch}
        style={{
          marginBottom: "20px",
        }}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </>
  );
}

export default Films;
