import Loader from "components/Loader";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "./movie";
import {
  actFetchData,
  actListMovieSuccessPrepareShowing,
  actListMovieSuccessShowing,
} from "redux/actions/listMovie";
import { Container } from "components/header/style";
import { DivNormal } from "components/cinema/style";
import Slider from "react-slick";
import { DivArrow, StyleButton } from "./style";

export default function ListMovie() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.listMovieReducer);

  useEffect(() => {
    dispatch(actFetchData());
  }, []);

  const [isActive, setIsActive] = useState(false);

  const { data } = props;
  const renderListMovie = () => {
    const { data, loading } = props;
    if (loading) {
      return <Loader />;
    }
    return data?.slice(0, 16).map((movie) => {
      return (
        // <DivNormal
        //   key={index}
        //   style={{ width: "100% !important", marginBottom: "30px !important" }}
        // >
        <Movie key={movie.maPhim} movie={movie} />
        // </DivNormal>
      );
    });
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <DivArrow
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <DivArrow className={className} style={{ ...style }} onClick={onClick} />
    );
  }
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    dots: false,
    autoplay: true,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <Container style={{ marginTop: "3rem", marginBottom: "3rem" }} id="demo">
      <StyleButton
        variant="text"
        onClick={() => {
          dispatch(actListMovieSuccessShowing(data));
          setIsActive(true ? "active" : "");
        }}
        property={isActive.toString()}
      >
        Phim Đang Chiếu
      </StyleButton>
      <StyleButton
        variant="text"
        onClick={() => {
          dispatch(actListMovieSuccessPrepareShowing(data));
          setIsActive(false ? "" : "active");
        }}
        property={isActive.toString()}
      >
        Phim Sắp Chiếu
      </StyleButton>
      <Slider {...settings}>{renderListMovie()}</Slider>
    </Container>
  );
}
