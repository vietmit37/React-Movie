import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchData } from "redux/actions/carousel";
import Loader from "components/Loader";
import { CarouselDiv, SliderImage } from "./style";
import Slider from "react-slick";

export default function Carousel() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.sliderMovieReducer);

  useEffect(() => {
    dispatch(actFetchData());
  }, []);

  const renderSliderMovie = () => {
    const { loading, data } = props;
    if (loading) {
      return <Loader />;
    }

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slickNext: true,
      slickPrevious: true,
      swipe: true,
    };

    return (
      <Slider {...settings}>
        {data?.map((slider) => {
          return (
            <CarouselDiv key={slider.maBanner}>
              <SliderImage src={slider.hinhAnh} alt={slider.hinhAnh} />
            </CarouselDiv>
          );
        })}
      </Slider>
    );
  };

  return (
    <CarouselDiv
      id="news"
      style={{ width: "100%", padding: 0, margin: 0, overflowX: "hidden" }}
    >
      {renderSliderMovie()}
    </CarouselDiv>
  );
}
