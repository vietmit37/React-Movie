import { Tabs } from "antd";
import { Container } from "components/header/style";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import actFetchData from "redux/actions/cinema";
import moment from "moment";
import {
  StyledImg,
  ListCinema,
  TitleCinema,
  ContentCinema,
  DivNormal,
  FlexDiv,
  StyledDiv,
  DivMovie,
  TitleMovie,
  StyledP,
  DetailIcon,
} from "./style";

const { TabPane } = Tabs;

const Cinema = () => {
  const [tabPosition, setTabPosition] = useState("left");

  const breakpoint = 1024;

  const dispatch = useDispatch();
  const props = useSelector((state) => state.cinemaReducer);

  useEffect(() => {
    dispatch(actFetchData());

    window.addEventListener("resize", () => {
      let width = window.innerWidth;
      width <= breakpoint ? setTabPosition("top") : setTabPosition("left");
    });
  }, []);

  const renderCinemaLogo = () => {
    const { data } = props;
    return data?.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <StyledImg
              src={heThongRap.logo}
              alt="logo"
              className="rounded-full"
              width={80}
            />
          }
          style={{ paddingLeft: "0px" }}
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <ListCinema>
                      <DivNormal>
                        <StyledImg
                          src={heThongRap.logo}
                          alt="logo"
                          className="rounded-full"
                          width={80}
                        />
                      </DivNormal>
                      <TitleCinema className="text-left ml-2">
                        <ContentCinema>{cumRap.tenCumRap}</ContentCinema>
                        <ContentCinema>{cumRap.diaChi}</ContentCinema>
                        <DetailIcon
                          to={`/`}
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <StyledP style={{ marginBottom: "0" }}>
                            Chi Tiết
                          </StyledP>
                          <svg
                            style={{
                              marginLeft: "4px",
                              width: "1rem",
                              height: "15px",
                              color: "red",
                            }}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </DetailIcon>
                      </TitleCinema>
                    </ListCinema>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim.slice(0, 4)?.map((movie, index) => {
                    return (
                      <Fragment key={index}>
                        <StyledDiv>
                          <FlexDiv>
                            <StyledImg
                              style={{ height: "150px", width: "150px" }}
                              src={movie.hinhAnh}
                              alt={movie.hinhAnh}
                              onError={(e) => {
                                e.target.onError = null;
                                e.target.src =
                                  "https://cdn.dealtoday.vn/91c579990f63476185d4e919816dbf3d.jpg";
                              }}
                            />
                          </FlexDiv>
                          <DivMovie>
                            <TitleMovie>{movie.tenPhim}</TitleMovie>

                            <DivNormal
                              style={{
                                display: "flex",
                                gap: "10px",
                                flexWrap: "wrap",
                              }}
                            >
                              {movie.lstLichChieuTheoPhim
                                .slice(0, 4)
                                ?.map((lichChieu, index) => {
                                  return (
                                    <NavLink
                                      to="/"
                                      style={{
                                        color: " #388e3c",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        width: "70px",
                                      }}
                                      key={index}
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </NavLink>
                                  );
                                })}
                            </DivNormal>
                          </DivMovie>
                        </StyledDiv>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <Container>
      <Tabs tabPosition={tabPosition}>{renderCinemaLogo()}</Tabs>
    </Container>
  );
};

export default Cinema;
