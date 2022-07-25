import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  tableCellClasses,
  styled,
  TableBody,
  TablePagination,
  Skeleton,
  Paper,
} from "@mui/material";

import moment from "moment";
import { useDispatch } from "react-redux";
import { actThongTinNguoiDung } from "redux/actions/auth";
import { ButtonChairNormal } from "components/screenChair/styled";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const TableBooking = (props) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const { thongTinNguoiDung, loadingAuth, thongTinPhim } = props;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const renderTicketBooked = () => {
    if (loadingAuth) {
      return (
        <>
          <StyledTableRow>
            <StyledTableCell colSpan={10}>
              <Skeleton animation="wave" />
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell colSpan={10}>
              <Skeleton animation="wave" />
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell colSpan={10}>
              <Skeleton animation="wave" />
            </StyledTableCell>
          </StyledTableRow>
        </>
      );
    }
    return thongTinNguoiDung.thongTinDatVe
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((item, index) => {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <StyledTableCell>{thongTinNguoiDung.hoTen}</StyledTableCell>
            <StyledTableCell>{thongTinNguoiDung.soDT}</StyledTableCell>
            <StyledTableCell>{item.tenPhim}</StyledTableCell>
            <StyledTableCell>
              <img
                src={item.hinhAnh}
                alt=""
                style={{ height: "100px", width: "100%" }}
              />
            </StyledTableCell>

            <StyledTableCell>
              {item.danhSachGhe[0].tenHeThongRap}
            </StyledTableCell>
            <StyledTableCell>{item.danhSachGhe[0].tenCumRap}</StyledTableCell>
            <StyledTableCell>
              {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
            </StyledTableCell>
            <StyledTableCell>
              {moment(item.ngayDatVe).format("DD/MM/YYYY")}{" "}
              {moment(item.ngayDatVe).format("HH:mm")}
            </StyledTableCell>
            <StyledTableCell>
              {item.danhSachGhe.map((gheDat, index) => {
                return (
                  <ButtonChairNormal key={index}>
                    {gheDat.tenGhe}
                  </ButtonChairNormal>
                );
              })}
            </StyledTableCell>
          </StyledTableRow>
        );
      });
  };
  useEffect(() => {
    dispatch(actThongTinNguoiDung());
  }, []);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 550 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Tên Khách Hàng</StyledTableCell>
              <StyledTableCell>Số điện thoại</StyledTableCell>
              <StyledTableCell>Tên Phim</StyledTableCell>
              <StyledTableCell>Hình Ảnh</StyledTableCell>
              <StyledTableCell>Tên Cụm Rạp</StyledTableCell>
              <StyledTableCell>Số Rạp</StyledTableCell>
              <StyledTableCell>Ngày Giờ Chiếu</StyledTableCell>
              <StyledTableCell>Ngày Giờ Mua Vé</StyledTableCell>
              <StyledTableCell align="center">Số Ghế</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>{renderTicketBooked()}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[2, 10, { value: -1, label: "All" }]}
        component="div"
        count={thongTinNguoiDung.thongTinDatVe.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableBooking;
