import { DivNormal } from "components/cinema/styled";
import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { actLogin } from "redux/actions/auth";
import { Navigate, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Loader from "components/Loader";
import { Container } from "components/header/styled";
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Typography } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import { StyledLinkNew } from "./styled";

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

  const handleSubmit = (e) => {
    e.preventDefault();
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

  if (localStorage.getItem("UserCustomer")) {
    return <Navigate replace to="/" />;
  }

  return (
   
        <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          {renderNoti()}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width:'390px' }}>
        
              <TextField
              margin="normal"
              required
              fullWidth
             
              id="email"
              label="Tài khoản"
              name="taiKhoan"
              autoFocus
              onChange={handleOnChange}
            />
             
              <TextField
              margin="normal"
              required
             fullWidth
              name="matKhau"
              label="Mật khẩu"
              type="password"
              id="password"
              onChange={handleOnChange}
            />
          
    
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
           
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              fullWidth
            >
             Đăng nhập
            </Button>
        
            <Grid container>
              <Grid item>
              

                <Link href="#" variant="body2" >
                <StyledLinkNew  to={`/register`}>Bạn chưa có tài khoản, đăng ký ngay</StyledLinkNew>
                
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      

  );
}
