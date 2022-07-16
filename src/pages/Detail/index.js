import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Button, Tabs, Tab } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumbs } from "@mui/material";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import moment from "moment";
import { QuanLyPhimService, QuanLyRap } from "../../services";

import "./index.css";

const Detail = () => {
  const { maPhim } = useParams();
  const navigate = useNavigate();

  const [film, setFilm] = useState();
  const [theaters, setTheaters] = useState([]);
  const [current, setCurrent] = useState(0);

  const initFunction = useCallback(async () => {
    const filmRes = await QuanLyPhimService.getFilmById(maPhim);
    const theatersRes = await QuanLyRap.getFilmSchedule(maPhim);
    setFilm(filmRes);
    setTheaters(theatersRes?.heThongRapChieu);
  }, [maPhim]);

  useEffect(() => {
    initFunction();
  }, [initFunction]);

  const star = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const formatMoney = (money) => {
    const result = money.toLocaleString("en-US", {
      style: "currency",
      currency: "VND",
    });
    return result.slice(1, result.length);
  };

  return (
    <div className="detail">
      <div className="detail-content">
        {/* Top */}
        <Box w={1} bgcolor={"#212121"} p={2}>
          <Breadcrumbs mb={2} color="white" w={1} >
            <Link
              href="/"
              sx={{
                color: "white",
                cursor: "pointer",
                fontSize: { xs: "12px", sm: "16px" },
              }}
              underline="none"
              fontWeight={600}
            >
              TRANG CHỦ
            </Link>
            <Typography
              fontWeight={600}
              sx={{
                fontSize: {
                  xs: "12px",
                  sm: "16px",
                  textTransform: "uppercase",
                },
              }}
            >
              CHI TIẾT
            </Typography>
          </Breadcrumbs>
          <Box
            sx={{
              width: "1",
              display: "flex",
              flexFlow: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "360px" },
                minWidth: { xs: "100%", sm: "360px" },
                height: { xs: "400px", sm: "480px" },
                backgroundImage: `url(${film?.hinhAnh})`,
                backgroundPosition: "center",
                backgroundSize: {xs: 'cover', md: 'contain'},
                backgroundRepeat: "no-repeat",
                margin: { xs: "0 auto", md: "0" },
                marginBottom: { xs: "20px", md: "0" },
              }}
            ></Box>
            <Box
              sx={{ flexGrow: "1", paddingLeft: { xs: "0", md: "10px" } }}
              position="relative"
              color="white"
            >
              <Typography
                variant="h2"
                sx={{ textTransform: "uppercase" }}
                fontSize={24}
                fontWeight={600}
                mb={2}
              >
                {film?.tenPhim}
              </Typography>
              <Typography variant="p" display={"block"} mb={2}>
                {film?.moTa}
              </Typography>

              <Box>
                <Typography variant="p" fontSize={16} fontWeight={600} pr={1}>
                  Ngày khởi chiếu:{" "}
                </Typography>
                <Typography variant="p">
                  {moment(film?.ngayKhoiChieu).format("DD/MM/YYYY")}
                </Typography>
              </Box>

              <Box mt={2} mb={8}>
                <Typography variant="h4" fontSize={16} fontWeight={600} mb={1}>
                  Đánh giá phim
                </Typography>
                <Box sx={{ display: "flex" }} mb={2}>
                  {star &&
                    star.map((item, index) => {
                      const color = index < film?.danhGia ? "yellow" : "white";
                      return <StarIcon sx={{ color: color }} key={index} />;
                    })}
                </Box>
              </Box>

              <Box
                display="flex"
                position="absolute"
                sx={{ bottom: "0", width: "100%" }}
              >
                <Button
                  sx={{
                    background: "green",
                    color: "white",
                    margin: { xs: "0 auto", md: "0" },
                  }}
                >
                  XEM TRAILER
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {theaters?.length !== 0 && (
          <Box color="white" bgcolor={"#212121"} mt={1} p={2}>
            <Typography variant="h4" fontSize={20} fontWeight={600} pb={2}>
              Hệ thống rạp chiếu
            </Typography>

            <Box sx={{ display: { xs: "block", md: "flex" } }}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                sx={{ borderRight: 1, borderColor: "divider" }}
                value={current}
                onChange={(e, value) => setCurrent(value)}
              >
                {theaters &&
                  theaters.map((item, index) => {
                    const label = (
                      <div
                        className={`${
                          current === index
                            ? "active tab-content"
                            : "tab-content"
                        }`}
                      >
                        <Box sx={{ width: "60px" }}>
                          <Avatar
                            width="60px"
                            src={item?.logo}
                            alt={item?.maHeThongRap}
                          />
                        </Box>
                        <Typography sx={{ whiteSpace: "nowrap" }}>
                          {item?.tenHeThongRap}
                        </Typography>
                      </div>
                    );
                    return <Tab label={label} value={index} key={index} />;
                  })}
              </Tabs>
              <Box flexGrow={1} p={2}>
                {theaters &&
                  theaters[current]?.cumRapChieu?.map((theater, index) => (
                    <Box
                      key={index}
                      mb={2}
                      bgcolor="#424242"
                      p={1}
                      sx={{ borderRadius: "2px" }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Box
                          width={"40px"}
                          height={"40px"}
                          mr={2}
                          sx={{
                            backgroundImage: `url(${theater?.hinhAnh})`,
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></Box>
                        <Box>
                          <Typography
                            variant="h4"
                            fontSize={16}
                            fontWeight={600}
                          >
                            {theater?.tenCumRap}
                          </Typography>
                          <Typography
                            variant="p"
                            fontSize={13}
                            fontWeight={400}
                          >
                            {theater?.diaChi}
                          </Typography>
                        </Box>
                      </Box>
                      {theater?.lichChieuPhim?.map((item, index) => (
                        <div className="booking-info" key={index}>
                          <Box mb={2}>
                            <Typography
                              fontSize={15}
                              fontWeight={700}
                              mb={1 / 2}
                            >
                              {item?.tenRap} -{" "}
                              {moment(item?.ngayChieuGioChieu).format("DD/MM")}
                            </Typography>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography
                                mr={2}
                                py={"2px"}
                                px={1}
                                sx={{ borderRadius: "3px" }}
                                fontSize={15}
                                fontWeight={600}
                                color={"green"}
                                bgcolor="white"
                              >
                                {moment(item?.ngayChieuGioChieu).format(
                                  "hh:mm"
                                )}
                              </Typography>
                              <Typography fontWeight={600} mr={1}>
                                {formatMoney(item?.giaVe)}đ
                              </Typography>
                            </Box>
                          </Box>
                          <Button
                            sx={{
                              width: "80px",
                              height: "36px",
                              color: "white",
                              background: "green",
                            }}
                            onClick={() =>
                              navigate("/booking", { state: { info: item } })
                            }
                          >
                            Mua Vé
                          </Button>
                        </div>
                      ))}
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

export default Detail;
