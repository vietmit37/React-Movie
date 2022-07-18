import { DivNormal } from "components/cinema/style";
import { Container } from "components/header/style";
import React, { useRef } from "react";
import { TitleTag, StyledButton } from "./style";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { actLogin } from "redux/actions/auth";
import { Navigate, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Loader from "components/Loader";

export default function LoginPage() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const ref = useRef({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    ref.current[name] = value;
  };

  const handleSubmit = () => {
    dispatch(actLogin(ref.current, navigate));
  };

  const renderNoti = () => {
    const { error } = props;

    return (
      error && (
        <DivNormal>
          <Alert severity="error">
            <AlertTitle>{error.response.data.content}</AlertTitle>
          </Alert>
        </DivNormal>
      )
    );
  };

  if (props.loading) {
    return <Loader />;
  }

  if (localStorage.getItem("User")) {
    return <Navigate replace to="/" />;
  }

  return (
    <DivNormal style={{ position: "absolute", top: "21%", right: "34%" }}>
      <Box
        sx={{ width: "500px", height: "500px", border: "1px solid #cbd5e0" }}
        style={{ display: "flex" }}
      >
        <Container>
          <TitleTag>Đăng Nhập</TitleTag>
          {renderNoti()}
          <DivNormal
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <DivNormal>
              <TextField
                name="taiKhoan"
                id="standard-basic"
                label="Tai Khoan"
                variant="standard"
                onChange={handleOnChange}
                required
              />
            </DivNormal>

            <DivNormal style={{ marginTop: "1rem" }}>
              <TextField
                name="matKhau"
                id="standard-basic"
                label="Mat Khau"
                variant="standard"
                onChange={handleOnChange}
                required
                type="password"
              />
            </DivNormal>
          </DivNormal>
          <DivNormal style={{ textAlign: "center", marginTop: "2rem" }}>
            <StyledButton variant="contained" onClick={handleSubmit}>
              Đăng Nhập
            </StyledButton>
          </DivNormal>
        </Container>
      </Box>
    </DivNormal>
  );
}
