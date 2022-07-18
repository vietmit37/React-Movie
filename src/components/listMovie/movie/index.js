import * as React from "react";
import { DivNormal } from "components/cinema/style";
import {
  FlipCardDiv,
  FlipCardInner,
  FlipCardFront,
  StyledImg,
  FlipCardBack,
  NameTag,
  TagSpan,
} from "./style";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export default function Movie(props) {
  const { movie } = props;
  return (
    <FlipCardDiv>
      <FlipCardInner id="inner">
        <FlipCardFront
          style={{
            backgroundImage: `url(${movie.hinhAnh})`,
            backgroundPosition: "center",
            backgroundSize: "100%",
            borderRadius: "15px",
          }}
        >
          <StyledImg
            src={movie.hinhAnh}
            alt={movie.hinhAnh}
            style={{ width: 300, height: 300 }}
          />
        </FlipCardFront>
        <FlipCardBack>
          <DivNormal style={{ position: "absolute", top: "0px", left: "0px" }}>
            <StyledImg
              src={movie.hinhAnh}
              alt={movie.hinhAnh}
              style={{ width: 300, height: 300 }}
            />
            <DivNormal
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundColor: "rgba(0,0,0,.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: "0",
              }}
            >
              <DivNormal>
                <DivNormal
                  style={{ borderRadius: "9999px", cursor: "pointer" }}
                >
                  <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
                </DivNormal>
                <NameTag>{movie.tenPhim}</NameTag>
              </DivNormal>
            </DivNormal>
          </DivNormal>
        </FlipCardBack>
      </FlipCardInner>
      <DivNormal
        style={{
          textAlign: "center",
          cursor: "pointer",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          fontWeight: "bold",
          backgroundColor: "#a2bffa",
        }}
      >
        <DivNormal
          style={{ display: "flex", alignItems: "center", marginLeft: "39%" }}
        >
          <TagSpan>Đặt Vé</TagSpan>
          <svg
            style={{
              marginLeft: "0.5rem",
              width: "1rem",
              height: "1rem",
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
        </DivNormal>
      </DivNormal>
    </FlipCardDiv>
  );
}
