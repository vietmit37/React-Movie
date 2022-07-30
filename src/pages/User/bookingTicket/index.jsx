import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

import { Tabs, Tab, Grid } from "@mui/material";
import { connection } from "../../../index";
import _ from "lodash";
import Loading from "components/loading";
import TableBooking from "components/tableBooking";
import {
  actQuanLiDatVe,
  actDatGheKhachDat,
  actChangeTabActive,
} from "redux/actions/quanLiDatVeAction";
import Ticket from "components/ticket";
import ScreenChair from "components/screenChair";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}
const BookingTicket = () => {
  const {
    chiTietDatVe,
    danhSachGheDangDat,
    tabActive,
    danhSachGheKhachDat,
    loading,
  } = useSelector((state) => state.quanLiDatVeReducer);

  const { userLogin, thongTinNguoiDung, loadingAuth } = useSelector(
    (state) => state.authReducer
  );
  const params = useParams();
  const dispatch = useDispatch();
  const { thongTinPhim, danhSachGhe } = chiTietDatVe;

  useEffect(() => {
    dispatch(actQuanLiDatVe(params.id));

    //Có 1 client nào thực hiện việc đặt vé thành công mình sẽ load lại danh sách phòng vé của lịch chiếu đó
    connection.on("datVeThanhCong", () => {
      dispatch(actQuanLiDatVe(params.id));
    });
    //Vừa vào trang load tất cả ghế của các người khác đang đặt
    connection.invoke("loadDanhSachGhe", params.id);

    // Load danh sách ghế đang đặt từ server về (lắng nghe tín hiệu từ server trả về)
    connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
      console.log("danhSachGheKhachDat", dsGheKhachDat);
      //Bước 1: Loại mình ra khỏi danh sách
      dsGheKhachDat = dsGheKhachDat.filter(
        (item) => item.taiKhoan !== userLogin.taiKhoan
      );
      //Bước 2 gộp danh sách ghế khách đặt ở tất cả user thành 1 mảng chung
      let arrGheKhachDat = dsGheKhachDat.reduce((result, item, index) => {
        let arrGhe = JSON.parse(item.danhSachGhe);

        return [...result, ...arrGhe];
      }, []);
      // Đưa dữ liệu vào redux
      arrGheKhachDat = _.uniqBy(arrGheKhachDat, "maGhe");

      dispatch(actDatGheKhachDat(arrGheKhachDat));
    });
    // Event Reload trang
    window.addEventListener("beforeunload", clearGheKhachDat);
    return () => {
      clearGheKhachDat();
      window.addEventListener("beforeunload", clearGheKhachDat);
    };
  }, []);
  const clearGheKhachDat = (event) => {
    connection.invoke("huyDat", userLogin.taiKhoan, params.id);
  };
  const handleOnChangeTab = (event, newValue) => {
    dispatch(actChangeTabActive(newValue));
  };
  if (!localStorage.getItem("UserCustomer")) {
    return <Navigate replace to="/auth" />;
  }
  return (
    <>
      <Loading />
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Tabs
            variant="scrollable"
            sx={{
              border: "2px solid #ccc ",
              borderColor: "divider",
              borderRadius: "10px",
              marginBottom: "2rem",
              boxShadow: "0px 0px 10px #00000029",
              height: "70px",
              alignItems: "center",
            }}
            value={tabActive}
            onChange={handleOnChangeTab}
          >
            <Tab label="01 Chọn Ghế và Thanh Toán"></Tab>
            <Tab label="02 Kết quả đặt vé"></Tab>
          </Tabs>
          <TabPanel value={tabActive} index={0}>
            <ScreenChair
              danhSachGhe={danhSachGhe}
              danhSachGheDangDat={danhSachGheDangDat}
              danhSachGheKhachDat={danhSachGheKhachDat}
              userLogin={userLogin}
              loading={loading}
            />
          </TabPanel>
          <TabPanel value={tabActive} index={1}>
            <TableBooking
              thongTinNguoiDung={thongTinNguoiDung}
              chiTietDatVe={chiTietDatVe}
              thongTinPhim={thongTinPhim}
              loadingAuth={loadingAuth}
            />
          </TabPanel>
        </Grid>
        <Grid item xs={3} sx={{ paddingLeft: "0 !important" }}>
          <Ticket
            thongTinPhim={thongTinPhim}
            userLogin={userLogin}
            danhSachGheDangDat={danhSachGheDangDat}
            loading={loading}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default BookingTicket;
