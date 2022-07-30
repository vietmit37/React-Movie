import { Box, Skeleton, Typography } from "@mui/material";
import { ThongTinDatVe } from "@type/thongTinDatVe";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { actDatVe } from "redux/actions/quanLiDatVeAction";

import {
  TicketButton,
  TicketCard,
  TicketCardContent,
  TicketChairSelect,
  TicketDescription1,
  TicketGrid,
  TicketImage,
  TicketTitle,
  TicketTitleContainer,
} from "./styled";
function SkeletonChildrenImg(props) {
  return (
    <>
      <Box>
        {props.loading ? (
          <Skeleton ariant="rectangular" width="100%">
            <div style={{ paddingTop: "90%" }} />
          </Skeleton>
        ) : (
          <TicketImage src={props.hinhAnh} />
        )}
      </Box>
    </>
  );
}
function SkeletonChildrenTitle(props) {
  return (
    <>
      <Box>
        {props.loading ? (
          <Skeleton ariant="rectangular" width="100%"></Skeleton>
        ) : (
          <TicketTitle>{props.tenPhim}</TicketTitle>
        )}
      </Box>
    </>
  );
}
function SkeletonChildrenDesc(props) {
  return (
    <>
      <Box>
        {props.loading ? (
          <Skeleton ariant="rectangular" variant="text" width="100%">
            <Typography variant="h3">.</Typography>
          </Skeleton>
        ) : (
          <TicketDescription1 detailTicket {...props} />
        )}
      </Box>
    </>
  );
}
const Ticket = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const renderDanhSachGheDangDat = () => {
    return props.danhSachGheDangDat
      .sort((a, b) => a.stt - b.stt)
      .map((ghe, index) => {
        return (
          <TicketChairSelect key={index}>&nbsp; {ghe.stt}</TicketChairSelect>
        );
      });
  };

  const sumMoney = () => {
    const res = props.danhSachGheDangDat
      .reduce((total, ghe) => {
        return (total += ghe.giaVe);
      }, 0)
      .toLocaleString("en-US", {
        style: "currency",
        currency: "VND",
      });
    return res.slice(1);
  };

  const datVe = () => {
    const thongTinDatVe = new ThongTinDatVe();
    thongTinDatVe.maLichChieu = params.id;
    thongTinDatVe.danhSachVe = props.danhSachGheDangDat;
    if (props.danhSachGheDangDat.length > 0) {
      dispatch(actDatVe(thongTinDatVe));
    } else {
      console.log("Chưa chọn ghế");
    }
  };
  return (
    <>
      {/* <TicketGrid item xs={3}> */}
      <TicketCard>
        <TicketTitleContainer>Thông tin vé đặt</TicketTitleContainer>
        <TicketCardContent>
          <TicketGrid container spacing={2} sx={{ alignItems: "center" }}>
            <TicketGrid item md={8}>
              {/* <TicketTitle>{props.thongTinPhim.tenPhim}</TicketTitle> */}
              <SkeletonChildrenTitle
                loading={props.loading}
                tenPhim={props.thongTinPhim.tenPhim}
              />
            </TicketGrid>
            <TicketGrid item md={4}>
              {/* <TicketImage src={props.thongTinPhim.hinhAnh} /> */}
              <SkeletonChildrenImg
                loading={props.loading}
                hinhAnh={props.thongTinPhim.hinhAnh}
              />
            </TicketGrid>
          </TicketGrid>
          <TicketDescription1
            descTitle={renderDanhSachGheDangDat()}
            descContent={`${sumMoney()} VNĐ`}
          />
          <SkeletonChildrenDesc
            loading={props.loading}
            underline="true"
            detailTicket
            descTitle="Ngày Giờ Chiếu"
            descContent={`${props.thongTinPhim.ngayChieu} - ${props.thongTinPhim.gioChieu}`}
          />
          <SkeletonChildrenDesc
            loading={props.loading}
            underline="true"
            detailTicket
            descTitle="Địa chỉ"
            descContent={props.thongTinPhim.tenCumRap}
          />
          <SkeletonChildrenDesc
            loading={props.loading}
            underline="true"
            detailTicket
            descTitle="Rạp chiếu"
            descContent={props.thongTinPhim.tenRap}
          />
          <SkeletonChildrenDesc
            loading={props.loading}
            underline="true"
            detailTicket
            descTitle="Tên Khách Hàng"
            descContent={props.userLogin.hoTen}
          />
          <SkeletonChildrenDesc
            loading={props.loading}
            underline="true"
            detailTicket
            descTitle="Email"
            descContent={props.userLogin.email}
          />
          <SkeletonChildrenDesc
            loading={props.loading}
            underline="true"
            detailTicket
            descTitle="Số Điện Thoại"
            descContent={props.userLogin.soDT}
          />
          <TicketButton
            onClick={() => {
              datVe();
            }}
          >
            Đặt vé{" "}
          </TicketButton>
        </TicketCardContent>
      </TicketCard>
      {/* </TicketGrid> */}
    </>
  );
};

export default memo(Ticket);
