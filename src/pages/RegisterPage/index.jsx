import { Alert, AlertTitle, Avatar, Button, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useRef, useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import { StyledLinkNew } from 'pages/LoginPage/styled';
import { useDispatch, useSelector } from 'react-redux';
import actRegister from 'redux/actions/register';
import { useNavigate } from 'react-router-dom';
import { DivNormal } from 'components/cinema/styled';

export default function RegisterPage() {
    const dispatch = useDispatch();
    const props = useSelector(state => state.registerReducer)
    const navigate = useNavigate();

    const ref = useRef({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        hoTen: "",
        maNhom: "GP01",
      });

      console.log(ref.current);
   
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        ref.current[name] = value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actRegister(ref.current, navigate))
    }

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
            Đăng ký
          </Typography>
          {renderNoti()}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
              required
              fullWidth
             
              id="hoTen"
              label="Họ tên"
              name="hoTen"
              autoFocus
              onChange={handleOnChange}
            />
                </Grid>
              <Grid item xs={12} >
              <TextField
              required
              fullWidth
             
              id="taiKhoan"
              label="Tài khoản"
              name="taiKhoan"
              autoFocus
              onChange={handleOnChange}
            />
             
              </Grid>
              <Grid item xs={12} >
              <TextField
              required
             fullWidth
              name="matKhau"
              label="Mật khẩu"
              type="password"
              id="password"
              onChange={handleOnChange}
            />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
              onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="soDt"
                  label="Số điện thoại"
                  type="number"
                  id="soDt"
              onChange={handleOnChange}
                />
              </Grid>
           
              <Grid item xs={12}>
              <TextField
                  value={`GP01`}
                  fullWidth
                  id="maNhom"
                  label="Mã nhóm"
                  name="maNhom"
                  disabled
                />
              </Grid>
              
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng ký
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                <StyledLinkNew  to={`/auth`}>Bạn đã có tài khoản, đăng nhập</StyledLinkNew>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  )
}
