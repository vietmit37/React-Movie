import React, { Fragment, memo } from "react";
import { useDispatch } from "react-redux";
import {
  ButtonChair,
  DescriptionChair,
  ScreenContainer,
  TableChair,
  Trapezoid,
} from "./styled";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Box } from "@mui/material";

import { useParams } from "react-router-dom";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { actDatGhe } from "redux/actions/quanLiDatVeAction";

const ScreenChair = (props) => {
  const { danhSachGhe, loading } = props;
  const dispatch = useDispatch();
  const params = useParams();
  const renderSeats = () => {
    if (loading) {
      return <div>Loading...</div>;
    }
    return danhSachGhe.map((item, index) => {
      let gheDaDat = item.daDat ? true : false;
      let gheVip = item.loaiGhe === "Vip" ? true : false;
      let gheDangDat =
        props.danhSachGheDangDat.filter((ghe) => ghe.maGhe === item.maGhe)
          .length > 0
          ? true
          : false;
      // ghế đang đặt là của mình
      let gheDatTaiKhoan =
        props.userLogin.taiKhoan === item.taiKhoanNguoiDat ? true : false;
      let gheKhachDat =
        props.danhSachGheKhachDat.filter((ghe) => ghe.maGhe === item.maGhe)
          .length > 0
          ? true
          : false;

      return (
        <Fragment key={index}>
          <ButtonChair
            disabled={gheDaDat}
            vip={gheVip}
            selected={gheDangDat}
            me={gheDatTaiKhoan}
            khach={gheKhachDat}
            onClick={() => {
              dispatch(actDatGhe(item, params.id));
            }}
          >
            {gheDaDat ? (
              gheDatTaiKhoan ? (
                <PersonOutlineIcon sx={{ fontSize: "15px" }} />
              ) : (
                "X"
              )
            ) : gheKhachDat ? (
              <InsertEmoticonIcon sx={{ fontSize: "14px" }} />
            ) : (
              item.stt
            )}
          </ButtonChair>
        </Fragment>
      );
    });
  };
  return (
    <>
      <ScreenContainer>
        <div
          style={{ width: "80%", height: "12px", backgroundColor: "black" }}
        ></div>
        <Trapezoid title="Màn hình" />
        <Box
          sx={{
            maxWidth: "55rem",
          }}
        >
          {renderSeats()}
        </Box>
      </ScreenContainer>
      <DescriptionChair>
        <TableChair />
      </DescriptionChair>
    </>
  );
};

export default memo(ScreenChair);
